import './App.scss';
import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Button from './components/Button/Button';
import ButtonAdd from './components/ButtonAdd/ButtonAdd.jsx';
import Image from './components/Image/Image.jsx';
import Modal from './components/Modal/Modal.jsx';
import ErrorAccess from './components/Error/Error.jsx';

function App() {
  const [people, setPeople] = useState([]);
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState('');
  const [modal, setModal] = useState(false);
  const [errorAccess, setErrorAccess] = useState(false);
  const [spinner, setSpinner] = useState(false);


  async function getAvatar() {
    const response = await fetch('https://laba-backend.herokuapp.com/tile');
    const result = await response.json();
    return result.avatar;
  }

  async function addAvatar() {
    try {
      setErrorAccess(true);
      setSpinner(true)
      const avatar = await getAvatar();
      setPeople((prevAvatar) => [...prevAvatar, avatar]);
    } catch (error) {
      setMessage(`Request for adding a new tile was failed: ${error}`);
      setModal(true);
    } finally {
      setErrorAccess(false);
      setSpinner(false)
    }
  }

  async function refreshAvatar(index) {
    try {
      getAvatar().then((avatar) => {
        const refresh = [...people];
        refresh.splice(index, 1, avatar);
        setPeople([...refresh]);
        setLoader(false);
      });
    } catch (error) {
      setModal(true);
      setMessage(`Request for adding a new tile was failed: ${error}`);
    }
  }

  async function refreshAllAvatars() {
    if (people.length === 0) {
      setModal(true);
      setMessage('Please add at least one tile for refreshing all tiles');
      return;
    }
    setLoader(true);

    const refreshAll = [...people];

    const refreshAvatars = await Promise.allSettled(
      refreshAll.map(() => getAvatar()),
    );
    setPeople((prevState) => {
      const refreshAll = [...prevState];
      const newAvatars = refreshAll.map((avatar, index) => {
        avatar = refreshAvatars[index].value;
        return avatar;
      });
      return newAvatars;
    });
    setLoader(false);
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <div className='container'>
      <div className='container__card'>
        {modal && (
          <Modal onClick={closeModal}>
            <p>{message}</p>
            <Button onClick={closeModal}>Close</Button>
          </Modal>
        )}
        {people.map((person, index) => (
          <ErrorBoundary
            key={index}
            FallbackComponent={ErrorAccess}
            onReset={() => refreshAvatar(index)}
            resetKeys={[people]}
          >
            <Image
              key={index}
              onClick={() => refreshAvatar(index)}
              src={person}
              loader={loader}
            />
          </ErrorBoundary>
        ))}

        <ButtonAdd loader={spinner} onClick={addAvatar}></ButtonAdd>
      </div>
      <div className='container__refresh'>
        <Button onClick={refreshAllAvatars}>
          Refresh All {people.length ? `(${people.length})` : null}
        </Button>
      </div>
    </div>
  );
}
export default App;

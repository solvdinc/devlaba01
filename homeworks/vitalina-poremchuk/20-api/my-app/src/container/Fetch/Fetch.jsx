import React, { useState } from 'react';
import Button from '../../components/Button/Button.jsx';
import ButtonAdd from '../../components/ButtonAdd/ButtonAdd.jsx';
import Image from '../../components/Image/Image.jsx';
import Modal from '../../components/Modal/Modal.jsx';
import './Fetch.scss';

function Fetch() {
  const [people, setPeople] = useState([]);
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState('');
  const [modal, setModal] = useState(false);

  async function getAvatar() {
    const response = await fetch('https://tinyfac.es/api/users');
    if (!response.ok) {
      const message = `The response has the error: ${response.status}`;
      throw new Error(message);
    }
    const result = await response.json();
    return result[0];
  }

  const addAvatar = () => {
    try {
      getAvatar().then((avatar) => {
        setPeople((prevAvatar) => [...prevAvatar, avatar]);
        setLoader(false);
      });
    } catch (reason) {
      setMessage(`Request for adding a new tile was failed: ${reason}`);
    }
  };

  const refreshAvatar = (index) => {
    try {
      getAvatar().then((avatar) => {
        const refresh = people;
        refresh.splice(index, 1, avatar);
        setPeople([...refresh]);
        setLoader(false);
      });
    } catch (reason) {
      setModal(true);
      setMessage(`Request for adding a new tile was failed: ${reason}`);
    }
  };

  async function refreshAllAvatars() {
    if (people.length === 0) {
      setModal(true);
      setMessage('Please add at least one tile for refreshing all tiles');
      return;
    }

    setLoader(true);
    const refreshAvatars = await Promise.all(
      people.map((avatar) => getAvatar()),
    );
    setPeople(refreshAvatars);
    setLoader(false);
  }

  function handlerModal() {
    setModal(false);
  }

  return (
    <div className="container">
      <div className="container__card">
        {modal && (
          <Modal onClick={handlerModal}>
            <p>{message}</p>
            <Button onClick={handlerModal}>Close</Button>
          </Modal>
        )}
        {people.map((person, index) => (
          <Image
            key={index.toString()}
            onClick={() => refreshAvatar(index)}
            src={person.avatars[0].url}
            loader={loader ? loader.toString() : null}
          />
        ))}
        <ButtonAdd onClick={addAvatar}></ButtonAdd>
      </div>
      <div className="container__refresh">
        <Button onClick={refreshAllAvatars}>
          Refresh All {people.length ? `(${people.length})` : null}
        </Button>
      </div>
    </div>
  );
}
export default Fetch;

import React, {useState} from 'react';
import './App.css'
import Avatar from './components/Avatar/Avatar';
import Add from './components/Add/Add';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorAvatar from './components/ErrorAvatar/ErrorAvatar';


const App = () => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('');
  const [modalText, setModalText] = useState('');
  const [showModal, setShowModal] = useState(false);

  const getData =  async() => {
    return await fetch('https://laba-backend.herokuapp.com/tile')
      .then(res => res.json())
      .then(data => data.avatar);
  };

  const addItem = () => {
    setStatus('pending');
    getData()
      .then((item) => {
        setItems((prevState) => [...prevState, item]);
        setStatus('resolved');
      })
      .catch((error) => {
        setShowModal(true);
        setModalText(`Request for adding a new tile was failed: ${error}`);
        setStatus('rejected');
      });
  };

  const refreshItem = (i) => {
    getData()
      .then((data) => {
        setItems((prevState) => {
          const items = [...prevState];
          items[i] = data;
          return items;
        });
      })
      .catch((error) => {
        setShowModal(true);
        setModalText(`Request for updating a new tile was failed: ${error}`);
      })
  };

  const refreshAll = async () => {
    if (!items.length) {
      setShowModal(true);
      setModalText('Please add at least one tile for refreshing all tiles');
    }
    Promise.allSettled(items.map(() => getData()))
      .then((avatars) => {
        const newItems = avatars.map((item) => { return item.value});
        setItems(newItems);
      });
  };

  return (
    <>
      <div className='container'>
          <div className='avatar-container'>
            {items.map((item, index) => {
              return (
                <ErrorBoundary
                  key={index}
                  FallbackComponent={ErrorAvatar}
                  onReset={() => refreshItem(index)}
                  resetKeys={[items]}
                >
                  <Avatar key={index} src={item} onClick={() => refreshItem(index)} />
                </ErrorBoundary>
              )
            })}
            <Add onClick={addItem} status={status}/>
          </div>
          <Button className='refresh-btn' onClick={refreshAll}>Refresh all {items.length ? `(${items.length})` : null}</Button>
      </div>
      {showModal &&
        <Modal onClick={() => setShowModal(false)}>
          <p>{modalText}</p>
        </Modal>
      }
    </>
  );
};

export default App;
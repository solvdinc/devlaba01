import './App.css';
import React, { useState } from 'react';
import AddButton from './components/AddButton/AddButton';
import Button from './components/Button/Button';
import Avatar from './components/Avatar/Avatar';
import Modal from './components/Modal/Modal';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorButton from './components/ErrorButton/ErrorButton';

const getUsers = async() => {
  const response = await fetch('https://laba-backend.herokuapp.com/tile');
  if (!response.ok) {
    throw new Error('response was rejected');
  }
  const users = await response.json();
  return users.avatar;
}

function App() {
  const [avatarCards, setAvatarCards] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const addUser = async () => {
    try {
      const user = await getUsers();
      setAvatarCards((state) => ([...state, user]));
    } catch (error) {
      setModal(true);
      setModalMessage(`Request for adding a new tile was failed: {${error}}`);
    }
  };

  const refreshUser = async (index) => {
    try {
      const users = await getUsers();
      const oldState = avatarCards;
      const newState = oldState.slice();
      newState.splice(index, 1, users[0]);
      setAvatarCards([...newState]);
    } catch (error) {
      setModal(true);
      setModalMessage(`Request for Updating the tile was failed: ${error}`);
    }
  }
  
  const refreshAll = () => {
    if(!avatarCards.length){
      setModal(true);
      setModalMessage('Please add at least one tile for refreshing all tiles');
    }
    Promise.allSettled(
      avatarCards.map(() => getUsers())
    ).then((state) => {
        const newAvatars = state.map((avatar) => avatar.value);
        setAvatarCards(newAvatars);
    });
  }

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='cards-container'>
          {avatarCards.map((user, index) => {
            return (
              <ErrorBoundary
              key={index}
              FallbackComponent={ErrorButton}
              onReset={() => refreshUser(index)}
              resetKeys={[avatarCards]}
              >
                <Avatar image={user} key={index} onClick={() => refreshUser(index)}/>
              </ErrorBoundary>
            )
          })}
          <AddButton onClick={addUser}/>
        </div>
        <div className='footer'>
        {avatarCards.length ? (
          <Button onClick={refreshAll}>
            refresh all
            {avatarCards.length ? `(count: ${avatarCards.length})` : null}
          </Button>
        ) : <Button onClick={refreshAll}>
              refresh all
            </Button>
        }
        </div>
      </div>
      {<Modal showModal={modal} onClick={() => setModal(false)}>
        {modalMessage}
      </Modal>}
    </div>
  );
}

export default App;

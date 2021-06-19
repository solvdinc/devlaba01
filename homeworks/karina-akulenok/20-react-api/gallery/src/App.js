import './App.css';
import React, { useState } from 'react';
import AddButton from './components/AddButton/AddButton';
import Button from './components/Button/Button';
import Avatar from './components/Avatar/Avatar';
import Modal from './components/Modal/Modal'

const getUsers = async() => {
  const response = await fetch('https://tinyfac.es/api/users');
  const users = await response.json();
  return users;
}

const getRandomUser = async () => {
  const users = await getUsers();
  const randomUser = Math.floor(Math.random() * users.length);
  const user = await users[randomUser];
  return user;
}

function App() {
  const [avatarCards, setAvatarCards] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const addUser = async () => {
    if(avatarCards.length >= 8) {
      setModal(true);
      setModalMessage('Request for adding a new tile was failed: {Can not add more then 9 tile}');
      return;
    }
    const user = await getRandomUser();
    setAvatarCards((state) => ([...state, user]));
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
    const oldState = avatarCards;
    Promise.all(
      oldState.map(() => getRandomUser())
    ).then(
      (state) => (setAvatarCards([...state])),
    );
  }

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='cards-container'>
          {avatarCards.map((user, index) => (
            <Avatar image={user.avatars[1].url} key={index} onClick={() => refreshUser(index)}/>
          ))}
          <AddButton onClick={addUser}/>
        </div>
        <div className='footer'>
        {avatarCards.length ? (
          <Button onClick={refreshAll}>
            refresh all
            {avatarCards.length ? `(count: ${avatarCards.length})` : null}
          </Button>
        ) : <Button name='refresh all' onClick={refreshAll}>
              refresh all
            </Button>}
        </div>
      </div>
      {<Modal showModal={modal} onClick={() => setModal(false)}>{modalMessage}</Modal>}
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';
import AddButton from './components/AddButton/AddButton';
import Button from './components/Button/Button';
import Avatar from './components/Avatar/Avatar';

const getUsers = async() => {
  const response = await fetch('https://tinyfac.es/api/users');
  const users = await response.json();
  return users;
}

const getRandomUser = async () => {
  const users = await getUsers();
  const randomUser = Math.floor(Math.random() * users.length)
  const user = await users[randomUser];
  return user;
}

function App() {
  const [avatarCards, setAvatarCards] = useState([]);

  const addUser = async () => {
    const user = await getRandomUser();
    setAvatarCards((state) => ([...state, user]));
  };

  const refreshUser = async (index) => {
    const users = await getUsers();
    const oldState = avatarCards;
    oldState.splice(index, 1, users[0]);
    setAvatarCards([...oldState]);
  }
  
  const refreshAll = () => {
    const oldState = avatarCards;
    Promise.all(oldState.map((item) => getRandomUser()))
      .then((state) => (setAvatarCards([...state])),
    );
  }

  return (
    <div className='container'>
      <div className='cards-container'>
        {avatarCards.map((user, index) => (
          <Avatar image={user.avatars[1].url} key={index} onClick={() => refreshUser(index)}/>
        ))}
        <AddButton onClick={addUser}/>
      </div>
      <div className='footer'>
      {avatarCards.length ? (
        <Button onClick={refreshAll}/>
      ) : <Button/>}
      </div>
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
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

class App extends React.Component {
  state = {
    avatarCards: [],
  };

  addUser = async () => {
    const user = await getRandomUser();
    this.setState((state) => ({avatarCards: [...state.avatarCards, user]}));
  }

  async refreshUser (index) {
    const users = await getUsers();
    const oldState = this.state.avatarCards;
    oldState.splice(index, 1, users[0]);
    this.setState({avatarCards: oldState});
  }
  
  refreshAll = () => {
    const oldState = this.state.avatarCards;
    Promise.all(oldState.map((item) => getRandomUser()))
      .then((state) => (this.setState({avatarCards: state})),
    );
  }

  render () {
    return (
      <div className='container'>
        <div className='cards-container'>
          {this.state.avatarCards.map((user, index) => (
            <Avatar image={user.avatars[1].url} key={index} onClick={() => this.refreshUser(index)}/>
          ))}
          <AddButton onClick={this.addUser}/>
        </div>
        <div className='footer'>
        {this.state.avatarCards.length ? (
          <Button onClick={this.refreshAll}/>
        ) : <Button/>}
        </div>
      </div>
    );
  }
}

export default App;

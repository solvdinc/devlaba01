import React, { useState } from 'react';
import AddButton from '../components/AddButton.jsx';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';
import './FetchUsers.css';

function FetchUser() {
  const [people, setPeople] = useState([]);
  const [loader, setLoader] = useState(false);

  async function getCards() {
    const response = await fetch('https://tinyfac.es/api/users');
    return await response.json();
  }

  async function getRandomCard() {
    const cards = await getCards();
    const randomNumber = Math.floor(cards.length * Math.random());
    return await cards[randomNumber];
  }

  async function addCard() {
    const card = await getRandomCard();
    setPeople(prevState => ([...prevState, card]));
  }

  async function refreshAll() {
    setLoader(true);
    const oldState = people;
    const newState = await Promise.all(oldState.map(() => getRandomCard()));
    setPeople(newState);
    setLoader(false);
  }

  async function avatarChanger(index) {
    const card = await getRandomCard();
    setPeople((prevState) => {
      const oldCards = [...prevState];
      oldCards[index] = card;
      return oldCards
    });
  }

  return (
    <div className='container'>
      <div className='cards'>
        {people.map((person, index) => (
          <div className='card' key={index}>
            <Card loading={loader} avatar={person.avatars[1].url} onClick={() => avatarChanger(index)} />
          </div>
        ))}
        <AddButton onClick={addCard} />
      </div>
      <div className='button-refresh-wrapper'>
        <div className='button-refresh-container'>
          {people.length ? <Button arialLabel='Refresh All' onClick={refreshAll}>Refresh All</Button> : null}
        </div>
      </div>
    </div>
  )
}

export default FetchUser;
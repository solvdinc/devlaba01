import React, { useState } from 'react';
import AddButton from '../components/AddButton.jsx';
import Card from '../components/Card.jsx';
import ModalWindow from '../components/ModalWindow.jsx';
import Button from '../components/Button.jsx';
import './FetchUsers.css';

function FetchUser() {
  const [people, setPeople] = useState([]);
  const [loader, setLoader] = useState(false);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState('');


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
    try {
      const card = await getRandomCard();
      setPeople(prevState => ([...prevState, card]));
    } catch (error) {
      setMessage(`Request for adding a new tile was failed: ${error}`);
      setModal(true);
    }
  }

  async function refreshAll() {
    if (!people.length) {
      setModal(true)
      setMessage('Please add at least one tile for refreshing all tiles');
      return
    }
    setLoader(true);
    const oldCards = people;
    const newState = await Promise.all(oldCards.map(() => getRandomCard()));
    setPeople(newState);
    setLoader(false);
  }

  async function avatarChanger(index) {
    try {
      const card = await getRandomCard();
      setPeople((prevState) => {
        const oldCards = [...prevState];
        oldCards[index] = card;
        return oldCards
      })
    } catch (error) {
      setMessage(`Request for updating the tile was failed: ${error}`);
      setModal(true)
    }
  }

  function handlerModal() {
    setModal(false)
  }

  return (
    <div className='container'>
      {modal &&
        <ModalWindow onClick={handlerModal}>
          <p>{message}</p>
          <Button arialLabel='Close Modal Window' onClick={handlerModal}>Close</Button>
        </ModalWindow>
      }
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
          <Button arialLabel='Refresh All' onClick={refreshAll}> Refresh All {people.length ? `(${people.length})` : null}</Button>
        </div>
      </div>
    </div>
  )
}

export default FetchUser;
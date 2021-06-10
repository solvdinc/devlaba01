import React, { useState } from 'react';
import AddButton from '../components/AddButton.jsx';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';
import './FetchUsers.css';

function FetchUser() {
  const [people, setPeople] = useState([]);
  const [loader, setLoader] = useState(false);

  async function getCards() {
    const url = 'https://tinyfac.es/api/users';
    const response = await fetch(url);
    const data = await response.json();

    return data
  }

  async function getRandomCard() {
    const cards = await getCards();
    const radnomNumber = Math.floor(cards.length * Math.random());
    const randomCard = await cards[radnomNumber];

    return randomCard
  }

  async function addCard() {
    const card = await getRandomCard();

    setPeople(prevState => ([...prevState, card]));
  }

  async function refreshAll() {
    setLoader(true);

    const oldState = people;
    const newState = await Promise.all(oldState.map(async (el) => {
      const card = await getRandomCard();
      el = card;
      return el
    }));

    setPeople(newState);
    setLoader(false);
  }

  async function avatarChanger(e) {
    const card = await getRandomCard();
    const curentItem = +e.target.id;
    setPeople((prevState) => {
      const prev = [...prevState];
      prev[curentItem] = card;
      return prev
    });
  }

  return (
    <div className='container'>
      <div className='cards'>
        {people.map((person, index) => {
          return (
            <div className='card'>
              <Card loading={loader} key={person.avatars_origin.id.toString()} id={index} avatar={person.avatars[1].url} onClick={avatarChanger} ></Card>
            </div>
          )
        })
        }
        <AddButton onClick={addCard}></AddButton>
      </div>
      <div className='button-refresh-wrapper'>
        <div className='button-refresh-container'>
          {people.length ? <Button arialLabel='Refresh All' onClick={refreshAll}> Refresh All </Button> : null}
        </div>
      </div>
    </div>
  )
}


export default FetchUser;
import React, { useState, useEffect } from 'react';
import AddButton from '../components/AddButton.jsx';
import Card from '../components/Card.jsx';
import ModalWindow from '../components/ModalWindow.jsx';
import Button from '../components/Button.jsx';
import CardWithError from '../components/CardWithError.jsx';
import { ErrorBoundary } from 'react-error-boundary';
import './FetchUsers.css';

function FetchUser() {
  const [people, setPeople] = useState([]);
  const [loader, setLoader] = useState(false);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState('');
  const [addButtonLoading, setAddButtonLoading] = useState(false);

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setModal(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  async function getCards() {
    const response = await fetch('https://laba-backend.herokuapp.com/tile');
    const data = await response.json();
    return data.avatar
  }

  async function addCard() {
    try {
      setAddButtonLoading(true);
      const card = await getCards();
      setPeople((prevState) => ([...prevState, card]));
    } catch (error) {
      setMessage(`Request for adding a new tile was failed: ${error}`)
      setModal(true);
    } finally {
      setAddButtonLoading(false);
    }
  }

  async function refreshAll() {
    if (!people.length) {
      setModal(true);
      setMessage('Please add at least one tile for refreshing all tiles');
    }
    setLoader(true);
    const oldCards = [...people];
    const newState = await Promise.allSettled(oldCards.map(() => getCards()));
    setPeople((prevState) => {
      const oldCards = [...prevState];
      const newCards = oldCards.map((card, index) => {
        card = newState[index].value;
        return card
      })
      return newCards
    });
    setLoader(false);
  }

  async function avatarChanger(index) {
    try {
      const card = await getCards();
      setPeople((prevState) => {
        const oldCards = [...prevState];
        oldCards[index] = card;
        return oldCards
      });
    } catch (error) {
      setMessage(`Request for updating the tile was failed: ${error}`);
      setModal(true);
    }
  }

  function handlerModal() {
    setModal(false);
  }

  return (
    <div className='container'>
      {modal &&
        <ModalWindow onClick={handlerModal}>
          <p>{message}</p>
          <Button arialLabel='Close' onClick={handlerModal}>Close</Button>
        </ModalWindow>
      }
      <div className='cards'>
        {people.map((person, index) => {
          return (
            <ErrorBoundary
              key={index}
              FallbackComponent={() => <CardWithError loading={loader} onClick={() => avatarChanger(index)} />}
              resetKeys={[people]}
            >
              <Card loading={loader} index={index} avatar={person} onClick={() => avatarChanger(index)} />
            </ErrorBoundary>
          )
        })
        }
        <AddButton loading={addButtonLoading} onClick={addCard} />
      </div>
      <div className='button-refresh-wrapper'>
        <div className='button-refresh-container'>
          <Button arialLabel='Refresh All' onClick={refreshAll}> Refresh All  {people.length ? `(${people.length})` : null} </Button>
        </div>
      </div>
    </div>
  )
}

export default FetchUser;
import React, { useState } from 'react';
import Button from '../../Components/Button/Button.jsx';
import AddBtn from '../../Components/AddBtn/AddBtn';
import Card from '../../Components/Card/Card';
import Loader from '../../Components/Loader/Loader';
import Modal from '../../Components/Modal/Modal';

import './CardsField.css';

function CardsField({ setIsOverlay }) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [overlayValue, setOverlayValue] = useState(false);
  const [modalText, setModalText] = useState('');

  const fetchCards = async () => {
    const res = await fetch('https://tinyfac.es/api/users');
    return res.json();
  };

  const getRandomCard = async () => {
    const cards = await fetchCards();
    const randomNumber = Math.floor(cards.length * Math.random());
    return cards[randomNumber];
  };

  const addCard = async () => {
    if (Math.random() * 10 > 6) {
      setModal('REQUEST for adding a new tile was failed: {reason}');
      return;
    }

    const card = await getRandomCard();
    setCards((prevCards) => [...prevCards, card]);
  };

  const refreshCard = async (index) => {
    if (Math.random() * 10 > 6) {
      setModal('REQUEST for Updating the tile was failed: {reason}');
      return;
    }

    const card = await getRandomCard();
    const oldCards = [...cards];
    oldCards.splice(index, 1, card);

    setCards(oldCards);
  };

  const refreshAll = async () => {
    if (!cards.length) {
      setModal('Please add at least one tile FOR refreshING all tiles');
      return;
    }

    setIsLoading(true);
    setIsOverlay(true);

    const oldCards = [...cards];
    const newCards = await Promise.all(oldCards.map((card) => getRandomCard()));

    setCards(newCards);
    setIsLoading(false);
    setIsOverlay(false);
  };

  function setModal(text) {
    setIsOverlay(true);
    setModalText(text);
  }

  function removeModal() {
    setIsOverlay(false);
    setModalText('');
  }

  return (
    <div className={overlayValue ? 'overflow' : null}>
      {isLoading && <Loader />}

      {modalText && (
        <Modal onClick={removeModal}>
          <p className="modal-text">{modalText}</p>
          <Button onClick={removeModal}>Close</Button>
        </Modal>
      )}

      <div className="container">
        <div className="app__inner">
          <div className="cards">
            {cards.map((card, index) => (
              <Card
                key={index}
                img={card.avatars[1]}
                onClick={() => refreshCard(index)}
              />
            ))}
            <AddBtn onClick={addCard} />
          </div>
          <div className="add-btn-wrap">
            <Button onClick={refreshAll}>
              Refresh All
              {cards.length ? `(${cards.length})` : null}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsField;

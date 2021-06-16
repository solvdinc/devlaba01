import React, { useState } from 'react';
import Button from '../../Components/Button/Button.jsx';
import AddBtn from '../../Components/AddBtn/AddBtn';
import Card from '../../Components/Card/Card';
import Modal from '../../Components/Modal/Modal';
import CardWithError from '../CardWithError/CardWithError.jsx';
import Loader from '../../Components/Loader/Loader.jsx';
import { ErrorBoundary } from 'react-error-boundary';

import './CardsField.css';

function CardsField({ setIsOverlay }) {
  const [cards, setCards] = useState([]);
  const [overlayValue, setOverlayValue] = useState(false);
  const [modalText, setModalText] = useState('');
  const [addButton, setAddButton] = useState(true);

  const getCard = async () => {
    const res = await fetch('https://laba-backend.herokuapp.com/tile');
    const data = await res.json();
    return data.avatar;
  };

  const addCard = async () => {
    setAddButton(false);
    setCards((prevCards) => [...prevCards, { img: '', status: 'pending' }]);

    try {
      const card = await getCard();
      setCards((prevCards) => {
        const oldCards = [...prevCards];
        oldCards[oldCards.length - 1].img = card;
        oldCards[oldCards.length - 1].status = 'resolved';
        return oldCards;
      });
    } catch (err) {
      setModal(`REQUEST for adding a new tile was failed: ${err}`);
      setCards((prevCards) => {
        const oldCards = [...prevCards];
        oldCards.pop();
        return oldCards;
      });
    } finally {
      setAddButton(true);
    }
  };

  const refreshCard = async (index) => {
    setCards((prevCards) => {
      const oldCards = [...prevCards];
      oldCards[index].status = 'pending';
      return oldCards;
    });

    try {
      const card = await getCard();
      setCards((prevCards) => {
        const oldCards = [...prevCards];
        oldCards[index].img = card;
        oldCards[index].status = 'resolved';
        return oldCards;
      });
    } catch (err) {
      setModal(`REQUEST for Updating the tile was failed: ${err}`);
      setCards(([...prevCards]) => {
        const oldCards = prevCards;
        oldCards[index].status = 'resolved';
        return prevCards;
      });
    }
  };

  const refreshAll = async () => {
    if (!cards.length) {
      setModal('Please add at least one tile FOR refreshING all tiles');
    }

    const oldCards = [...cards];
    oldCards.map((card) => (card.status = 'pending'));
    setCards(oldCards);

    const newCards = await Promise.allSettled(
      oldCards.map((card, index) => getCard()),
    );
    setCards((prevCards) => {
      const oldCards = [...prevCards];
      oldCards.map((card, index) => {
        card.img = newCards[index].value;
        card.status = 'resolved';
        return card;
      });
      return oldCards;
    });
  };

  function setModal(text) {
    setOverlayValue(true);
    setModalText(text);
    setIsOverlay(true);
  }

  function removeModal() {
    setOverlayValue(false);
    setModalText('');
    setIsOverlay(false);
  }

  return (
    <div className={overlayValue ? 'overflow' : null}>
      {modalText && (
        <Modal onClick={removeModal}>
          <p className="modal-text">{modalText}</p>
          <Button onClick={removeModal}>Close</Button>
        </Modal>
      )}

      <div className="container">
        <div className="app__inner">
          <div className="cards">
            {cards.map((card, index) => {
              return card.status === 'pending' ? (
                <Loader />
              ) : (
                <ErrorBoundary
                  key={index}
                  FallbackComponent={CardWithError}
                  onReset={() => refreshCard(index)}
                  resetKeys={[cards]}
                >
                  <Card card={card} onClick={() => refreshCard(index)} />
                </ErrorBoundary>
              );
            })}
            {addButton && <AddBtn onClick={addCard} />}
          </div>
          <div className="refresh-btn-wrap">
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

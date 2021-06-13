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
  const [fetchedCards, setFetchedCards] = useState([]);
  const [overlayValue, setOverlayValue] = useState(false);
  const [modalText, setModalText] = useState('');
  const [addButton, setAddButton] = useState(true);

  async function getCard() {
    const data = await fetch('https://laba-backend.herokuapp.com/tile');
    const res = await data.json();
    return res.avatar;
  }

  function addCard() {
    setAddButton(false);
    setFetchedCards((prevCards) => [
      ...prevCards,
      { img: '', status: 'pending' },
    ]);
    getCard()
      .then((card) => {
        setFetchedCards(([...prevCards]) => {
          const oldCards = prevCards;
          oldCards[oldCards.length - 1].img = card;
          oldCards[oldCards.length - 1].status = 'resolved';
          return oldCards;
        });
      })
      .catch((err) => {
        setModal(`REQUEST for adding a new tile was failed: ${err}`);
        setFetchedCards(([...prevCards]) => {
          const oldCards = prevCards;
          oldCards.splice(-1);
          return oldCards;
        });
      })
      .finally(() => {
        setAddButton(true);
      });
  }

  function refreshCard(index) {
    setFetchedCards(([...prevCards]) => {
      const oldCards = prevCards;
      oldCards[index].status = 'pending';
      return oldCards;
    });
    getCard()
      .then((img) => {
        setFetchedCards(([...prevCards]) => {
          const oldCards = prevCards;
          oldCards[index].img = img;
          oldCards[index].status = 'resolved';
          return oldCards;
        });
      })
      .catch((err) => {
        setModal(`REQUEST for Updating the tile was failed: ${err}`);
        setFetchedCards(([...prevCards]) => {
          const oldCards = prevCards;
          oldCards[index].status = 'resolved';
          return prevCards;
        });
      });
  }

  function refreshAll() {
    const oldCards = [...fetchedCards];
    oldCards.map((card) => (card.status = 'pending'));
    setFetchedCards(oldCards);

    Promise.allSettled(oldCards.map((card, index) => getCard())).then(
      (newCards) => {
        setFetchedCards(([...prevCards]) => {
          const oldCards = prevCards;
          oldCards.map((card, index) => {
            card.img = newCards[index].value;
            card.status = 'resolved';
            return card;
          });
          return oldCards;
        });
      },
    );
  }

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
            {fetchedCards.map((card, index) => {
              return card.status === 'pending' ? (
                <Loader />
              ) : (
                <ErrorBoundary
                  key={index}
                  FallbackComponent={CardWithError}
                  onReset={() => refreshCard(index)}
                  resetKeys={[fetchedCards]}
                >
                  <Card card={card} onClick={() => refreshCard(index)} />
                </ErrorBoundary>
              );
            })}
            {addButton && <AddBtn onClick={addCard} />}
          </div>
          <div className="add-btn-wrap">
            <Button onClick={refreshAll}>
              Refresh All
              {fetchedCards.length ? `(${fetchedCards.length})` : null}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsField;

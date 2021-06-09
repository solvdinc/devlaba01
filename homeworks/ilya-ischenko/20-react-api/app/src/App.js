import React, { useState } from 'react';
import Button from './Components/Button/Button';
import AddBtn from './Components/AddBtn/AddBtn';
import Card from './Components/Card/Card';
import Overlay from './Components/Overlay/Overlay';
import Loader from './Components/Loader/Loader';
import Modal from './Components/Modal/Modal';

function App() {
  const [fetchedCards, setFetchedCards] = useState([]);
  const [loader, setLoader] = useState(false);
  const [overlayValue, setOverlayValue] = useState(false);
  const [modalText, setModalText] = useState('');

  async function fetchCards() {
    const data = await fetch('https://tinyfac.es/api/users');
    const res = await data.json();
    return res;
  }

  async function getRandomCard() {
    const cards = await fetchCards();
    const radnomNumber = Math.floor(cards.length * Math.random());
    return cards[radnomNumber];
  }

  function addCard() {
    if (Math.random() * 10 > 6) {
      setModal('REQUEST for adding a new tile was failed: {reason}');
      return;
    }

    getRandomCard().then((card) => {
      setFetchedCards((prevCards) => [...prevCards, card]);
    });
  }

  function refreshCard(index) {
    if (Math.random() * 10 > 6) {
      setModal('REQUEST for Updating the tile was failed: {reason}');
      return;
    }

    fetchCards().then((cards) => {
      const oldCards = fetchedCards;
      oldCards.splice(index, 1, cards[0]);

      setFetchedCards([...oldCards]);
    });
  }

  function refreshAll() {
    if (!fetchedCards.length) {
      setModal('Please add at least one tile FOR refreshING all tiles');
      return;
    }

    setLoader(true);
    setOverlayValue(true);
    const oldCards = fetchedCards;
    Promise.all(oldCards.map((card) => getRandomCard())).then((newCards) => {
      setFetchedCards(newCards);
      setLoader(false);
      setOverlayValue(false);
    });
  }

  function setModal(text) {
    setOverlayValue(true);
    setModalText(text);
  }

  function removeModal() {
    setOverlayValue(false);
    setModalText('');
  }

  return (
    <div className={overlayValue ? 'overflow' : null}>
      {overlayValue && <Overlay />}

      {loader && <Loader />}

      {modalText && (
        <Modal onClick={removeModal}>
          <p className="modal-text">{modalText}</p>
          <Button onClick={removeModal}>Close</Button>
        </Modal>
      )}

      <div className="container">
        <div className="app__inner">
          <div className="cards">
            {fetchedCards.map((card, index) => (
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
              Refresh All{' '}
              {fetchedCards.length ? `(${fetchedCards.length})` : null}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Button from './Components/Button/Button';
import AddBtn from './Components/AddBtn/AddBtn';
import Card from './Components/Card/Card';
import Overlay from './Components/Overlay/Overlay';
import Loader from './Components/Loader/Loader';

function App() {
  const [fetchedCards, setFetchedCards] = useState([]);
  const [loader, setLoader] = useState(false);

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
    getRandomCard().then((card) => {
      setFetchedCards((prevCards) => [...prevCards, card]);
    });
  }

  function refreshCard(index) {
    fetchCards().then((cards) => {
      const oldCards = fetchedCards;
      oldCards.splice(index, 1, cards[0]);

      setFetchedCards([...oldCards]);
    });
  }

  function refreshAll() {
    setLoader(true);
    const oldCards = fetchedCards;
    Promise.all(oldCards.map((card) => getRandomCard())).then((newCards) => {
      setFetchedCards(newCards);
      setLoader(false);
    });
  }

  return (
    <div className={loader ? 'overflow' : null}>
      {loader && (
        <Overlay>
          <Loader />
        </Overlay>
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
            {fetchedCards.length && (
              <Button onClick={refreshAll}>Refresh All</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

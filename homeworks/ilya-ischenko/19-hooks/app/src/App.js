import React, { useState } from 'react';
import Button from './Components/Button/Button';
import AddBtn from './Components/AddBtn/AddBtn';
import Card from './Components/Card/Card';
import Overlay from './Components/Overlay/Overlay';
import Loader from './Components/Loader/Loader';

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCards = async () => {
    const res = await fetch('https://tinyfac.es/api/users');
    return await res.json();
  };

  const getRandomCard = async () => {
    const cards = await fetchCards();
    const randomNumber = Math.floor(cards.length * Math.random());
    return cards[randomNumber];
  };

  const addCard = async () => {
    const card = await getRandomCard();
    setCards((prevCards) => [...prevCards, card]);
  };

  const refreshCard = async (index) => {
    const card = await getRandomCard();
    const oldCards = [...cards];
    oldCards.splice(index, 1, card);

    setCards(oldCards);
  };

  const refreshAll = async () => {
    setIsLoading(true);
    const oldCards = [...cards];
    const newCards = await Promise.all(oldCards.map((card) => getRandomCard()));

    setCards(newCards);
    setIsLoading(false);
  };

  return (
    <div className={isLoading ? 'overflow' : null}>
      {isLoading && (
        <Overlay>
          <Loader />
        </Overlay>
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
            {cards.length && <Button onClick={refreshAll}>Refresh All</Button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

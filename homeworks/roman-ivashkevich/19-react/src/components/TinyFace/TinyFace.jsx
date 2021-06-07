import './TinyFace.css';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';

const TinyFace = () => {
  const [cards, setCards] = useState([]);
  const [isDisabled, setDisabled] = useState(false);
  const [loadingCardIndex, setLoadingCardIndex] = useState(null);

  useEffect(() => {
    if (cards.length === 13) {
      setDisabled(true);
    }
  }, [cards.length]);

  const getCards = async () => {
    const URL = 'https://tinyfac.es/api/users';
    const response = await fetch(URL);
    return response.json();
  };

  const addCard = () => {
    getCards().then((asyncCards) => {
      const card = asyncCards.find((el) => !cards.includes(el.avatars[1].url));
      if (card) {
        setCards((prevState) => [...prevState, card.avatars[1].url]);
      }
    });
  };

  const refreshAll = () => {
    getCards().then((asyncCards) => {
      const newCards = cards.map((el, i) => asyncCards[i].avatars[1].url);
      setCards(newCards);
    });
  };

  const updateCard = (currentIndex) => {
    setLoadingCardIndex(currentIndex);
    getCards().then((asyncCards) => {
      const card = asyncCards.find((el) => !cards.includes(el.avatars[1].url));

      const newCards = cards.map((el, index) =>
        index === currentIndex ? card.avatars[1].url : el,
      );

      setCards(newCards);
      setLoadingCardIndex(null);
    });
  };

  return (
    <>
      <div className="cards-container">
        <div className="cards-wrapper">
          {cards.map((el, i) => (
            <Card
              key={i}
              src={el}
              onClick={() => updateCard(i)}
              index={i}
              loadingCardIndex={loadingCardIndex}
            />
          ))}
          <div className="add-btn-container">
            <button
              disabled={isDisabled}
              className="add-btn"
              onClick={addCard}
            />
          </div>
        </div>
      </div>
      <div className="refresh-btn-container">
        <button
          disabled={!cards.length}
          className="refresh-btn"
          onClick={refreshAll}
        >
          Refresh All
        </button>
      </div>
    </>
  );
};

export default TinyFace;

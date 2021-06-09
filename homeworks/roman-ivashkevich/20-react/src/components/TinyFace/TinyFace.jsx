import { useEffect, useRef, useState } from 'react';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import './TinyFace.css';
import { useSpring } from 'react-spring';

const TinyFace = () => {
  const [cards, setCards] = useState([]);
  const [isDisabled, setDisabled] = useState(false);
  const [loadingCardIndex, setLoadingCardIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const modalRef = useRef(null);

  // useEffect(() => {
  //   if (cards.length === 13) {
  //     setDisabled(true);
  //   }
  // }, [cards.length]);

  const getCards = async () => {
    const URL = 'https://tinyfac.es/api/users';
    const response = await fetch(URL);
    return response.json();
  };

  const addCard = () => {
    if (cards.length === 13) {
      setShowModal(true);
      setModalContent(
        'Request for adding a new tile was failed: no response from api',
      );
    }
    getCards().then((asyncCards) => {
      const card = asyncCards.find((el) => !cards.includes(el.avatars[1].url));
      if (card) {
        setCards((prevState) => [...prevState, card.avatars[1].url]);
      }
    });
  };

  const refreshAll = () => {
    if (!cards.length) {
      setShowModal(true);
      setModalContent('Please add at least one tile for refreshing all tiles');
    }

    getCards().then((asyncCards) => {
      const newCards = cards.map((el, i) => asyncCards[i].avatars[1].url);
      setCards(newCards);
    });
  };

  const updateCard = (currentIndex) => {
    setLoadingCardIndex(currentIndex);
    getCards().then((asyncCards) => {
      if (cards.length !== 13) {
        const card = asyncCards.find(
          (el) => !cards.includes(el.avatars[1].url),
        );

        const newCards = cards.map((el, index) =>
          index === currentIndex ? card.avatars[1].url : el,
        );

        setCards(newCards);
        setLoadingCardIndex(null);
      } else {
        setTimeout(() => {
          setLoadingCardIndex(null);
          setShowModal(true);
          setModalContent(
            'Request for updating the tile was failed: no unique cards',
          );
        }, 5000);
      }
    });
  };

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal
      ? 'translate(-50%, -50%) scale(1)'
      : 'translate(-50%, -50%) scale(0)',
  });

  return (
    <>
      <div className="cards-container">
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
            type="button"
            disabled={isDisabled}
            className="add-btn"
            onClick={addCard}
          />
        </div>
      </div>
      <div className="refresh-btn-container">
        <button type="button" className="refresh-btn" onClick={refreshAll}>
          Refresh All {cards.length ? `(${cards.length})` : null}
        </button>
      </div>
      <Modal
        ref={modalRef}
        showModal={showModal}
        setShowModal={setShowModal}
        modalContent={modalContent}
        onClose={() => setShowModal(false)}
        animation={animation}
      />
    </>
  );
};

export default TinyFace;

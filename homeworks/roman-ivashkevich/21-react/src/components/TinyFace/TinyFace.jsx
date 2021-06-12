import { useRef, useState } from 'react';
import Card from '../Card/Card';
import ErrorCard from '../ErrorCard/ErrorCard';
import Modal from '../Modal/Modal';
import './TinyFace.css';
import AddBtn from '../AddBtn/AddBtn';

const TinyFace = () => {
  const [cards, setCards] = useState([]);
  const [isPending, setPending] = useState(false);
  const [isError, setError] = useState(false);
  const [loadingCardIndex, setLoadingCardIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const modalRef = useRef(null);

  const getCard = async () => {
    const URL = 'https://laba-backend.herokuapp.com/tile';
    const response = await fetch(URL);

    return response.json();
  };

  const addCard = () => {
    setPending(true);
    getCard()
      .then(
        (asyncCard) => {
          if (typeof asyncCard.avatar === 'object') {
            setError(true);
          }
          console.log(asyncCard);
          setCards((prevState) => [...prevState, asyncCard.avatar]);
          setPending(false);
        },
        (error) => {
          setShowModal(true);
          setModalContent(
            `Request for adding a new tile was failed: ${error.message}`,
          );
          setPending(false);
        },
      )
      .catch((error) => console.log(error.message));
  };

  const refreshAll = () => {
    if (!cards.length) {
      setShowModal(true);
      setModalContent('Please add at least one tile for refreshing all tiles');
    }
    const cloneCard = cards;

    Promise.allSettled(cloneCard.map((card) => getCard())).then(
      (asyncCards) => {
        const newCards = asyncCards.map((card) => {
          if (card.value) {
            return card.value.avatar;
          }
        });
        setCards(newCards);
        setError(false);
      },
    );
  };

  const updateCard = (currentIndex) => {
    setLoadingCardIndex(currentIndex);
    getCard()
      .then(
        (asyncCard) => {
          if (typeof asyncCard.avatar === 'object') {
            setError(true);
          }
          const newCards = cards.map((el, index) =>
            index === currentIndex ? asyncCard.avatar : el,
          );

          setCards(newCards);
          setLoadingCardIndex(null);
        },
        (error) => {
          setShowModal(true);
          setModalContent(
            `Request for updating the tile was failed: ${error.message}`,
          );
          setLoadingCardIndex(null);
        },
      )
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="cards-container">
        {cards.map((el, i) =>
          typeof el === 'string' ? (
            <Card
              key={i}
              src={el}
              onClick={() => updateCard(i)}
              index={i}
              loadingCardIndex={loadingCardIndex}
            />
          ) : (
            <ErrorCard key={i} />
          ),
        )}
        <AddBtn onClick={addCard} isPending={isPending} isError={isError} />
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
      />
    </>
  );
};

export default TinyFace;

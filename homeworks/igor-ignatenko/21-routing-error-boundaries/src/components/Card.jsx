import React from 'react';
import Spinner from '../assets/001-refresh.svg';
import './Card.css';

const Card = ({ loading, person, onClick }) => {
  if (typeof person !== 'string') {
    throw new Error();
  }
  return (
    <>
      {loading && <div className='overlay'>
        <div className='refreshAll'>
          <img src={Spinner} alt='refresh' className='refresh' ></img>
        </div>
      </div>}
      <div className='card__avatar' onClick={onClick} style={{ backgroundImage: `url(${person})` }}>
      </div>
    </>
  )
}
export default Card;
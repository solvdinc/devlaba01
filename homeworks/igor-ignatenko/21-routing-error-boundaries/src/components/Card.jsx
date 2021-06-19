import React from 'react';
import refreshIcon from '../assets/001-refresh.svg';
import './Card.css';

const Card = ({ loading, avatar, onClick }) => {
  if (typeof avatar !== 'string') {
    throw new Error();
  }

  return (
    <div className='card'>
      {loading && <div className='overlay'>
        <div className='refresh-all'>
          <img src={refreshIcon} alt='refresh' className='refresh' />
        </div>
      </div>}
      <div className='card__avatar' onClick={onClick} style={{ backgroundImage: `url(${avatar})` }} />
    </div>
  )
};
export default Card;

import React from 'react';
import refresfIcon from './../../assets/001-refresh.svg';
import Box from '../Box/Box.jsx';

import './Card.css';

const Card = ({ card, onClick }) => {
  if (typeof card.img !== 'string') {
    throw new Error();
  }

  return (
    <Box>
      <div
        onClick={(index) => onClick(index)}
        className="card"
        style={{ backgroundImage: `url(${card.img})` }}
      >
        <div className="refresh">
          <img className="refresh__icon" src={refresfIcon} alt="avatar" />
        </div>
      </div>
    </Box>
  );
};

export default Card;

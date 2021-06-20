import React from 'react';

import './Card.css';
import refresfIcon from './../../assets/001-refresh.svg';

const Card = ({ img, onClick }) => (
  <div className="card">
    <div
      onClick={onClick}
      className="card__inner"
      style={{ backgroundImage: `url(${img.url})` }}
    >
      <div className="refresh">
        <img className="refresh__icon" src={refresfIcon} alt="avatar" />
      </div>
    </div>
  </div>
);

export default Card;

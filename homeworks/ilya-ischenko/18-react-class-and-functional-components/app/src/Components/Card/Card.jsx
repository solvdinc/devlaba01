import React, { Component } from 'react';

import './Card.css';
import refresfIcon from './../../assets/001-refresh.svg';

class Card extends Component {
  render() {
    return (
      <div className="card" onClick={(index) => this.props.onClick(index)}>
        <div
          className="card__inner"
          style={{ backgroundImage: `url(${this.props.img.url})` }}
        >
          <div className="refresh">
            <img className="refresh__icon" src={refresfIcon} />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

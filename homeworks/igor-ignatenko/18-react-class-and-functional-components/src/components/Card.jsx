import React, { Component } from 'react';
import refreshIcon from '../assets/001-refresh.svg';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <>
        {this.props.loading && <div className='overlay'>
          <div className='refresh-all'>
            <img src={refreshIcon} alt='refresh' className='refresh' />
          </div>
        </div>}
        <div className='card__avatar' onClick={this.props.onClick} style={{ backgroundImage: `url(${this.props.avatar})` }}></div>
      </>
    )
  };
};

export default Card;
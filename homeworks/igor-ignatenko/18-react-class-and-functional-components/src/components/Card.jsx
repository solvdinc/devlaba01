import React, { Component } from 'react';
import Spinner from '../assets/001-refresh.svg';
import './Card.css';

class Card extends Component {
	render() {
		return (
			<>
				{this.props.loading && <div className='overlay'>
					<div className='refreshAll'>
						<img src={Spinner} alt='spinner' className='spinner' />
					</div>
				</div>}
				<div className='card__avatar' key={this.props.id} id={this.props.id} onClick={this.props.onClick} style={{ backgroundImage: `url(${this.props.avatar})` }}></div>
			</>
		)
	};
};

export default Card;
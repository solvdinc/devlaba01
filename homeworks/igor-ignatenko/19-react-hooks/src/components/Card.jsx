import React from 'react';
import Spinner from '../assets/001-refresh.svg';
import './Card.css';

const Card = ({ loading, id, avatar, onClick }) => (
    <>
        {loading && <div className='overlay'>
            <div className='refreshAll'>
                <img src={Spinner} alt='spinner' className='spinner' ></img>
            </div>
        </div>}
        <div className='card__avatar' key={id} id={id} onClick={onClick} style={{ backgroundImage: `url(${avatar})` }}>
        </div>
    </>
)

export default Card;
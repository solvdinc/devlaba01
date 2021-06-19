import React from 'react';
import Error from '../assets/001-error.svg';
import Spinner from '../assets/001-refresh.svg';
import Button from '../components/Button'
import './CardWithError.css';

const CardWithError = ({ loading, onClick }) => (
  <div className='card'>
    {loading && <div className='overlay'>
      <div className='refresh-all'>
        <img src={Spinner} alt='refresh' className='refresh' />
      </div>
    </div>}
    <div className='card-error'>
      <img src={Error} alt='Error' className='error-icon' />
      <Button arialLabel='Refresh card' onClick={onClick}>Refresh</Button>
    </div>
  </div>
)

export default CardWithError;
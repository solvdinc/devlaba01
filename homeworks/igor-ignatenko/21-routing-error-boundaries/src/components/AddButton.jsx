import React from 'react';
import spinner from '../assets/001-spinner.svg';
import './AddButton.css';

const AddButton = ({ onClick, loading }) => (
  <button className={`card-button-add${loading ? '__spinner' : ''}`} onClick={onClick}>
    {loading && <img alt='spinner' src={spinner} className='spinner' />}
  </button>
);

export default AddButton;
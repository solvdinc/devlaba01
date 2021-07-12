import React from 'react';
import './AddButton.css';
import plusImg from '../../assets/plus.png'

const AddButton = ({onClick}) => {
  return (
    <button className='add-button' onClick={onClick}>
      <img src={plusImg} alt='plus' />
    </button>
  );
};

export default AddButton;
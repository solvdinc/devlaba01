import React from 'react';
import './Button.css';

const Button = ({onClick}) => {
  return (
    <button className='refresh-button' onClick={onClick}>
      Refresh All
    </button>
  );
};

export default Button;
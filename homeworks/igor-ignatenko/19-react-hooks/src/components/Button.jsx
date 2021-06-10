import React from 'react';
import './Button.css';

const Button = ({ onClick, arialLabel, children }) => (
  <button className='button' arial-label={arialLabel} onClick={onClick} >{children} </button>
)

export default Button;
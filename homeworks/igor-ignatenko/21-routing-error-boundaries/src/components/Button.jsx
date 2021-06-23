import React from 'react';
import './Button.css';

const Button = ({ onClick, ariaLabel, children }) => (
  <button className='button' arial-label={ariaLabel} onClick={onClick} >{children}</button>
)

export default Button;

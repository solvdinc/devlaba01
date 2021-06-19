import React from 'react';
import './Button.css';

const Button = ({onClick, name, className}) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
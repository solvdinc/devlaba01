import React, { Component } from 'react';
import './Button.scss';

const Button = ({ onClick, children }) => (
  <button className='button' onClick={onClick}>
    {children}
  </button>
);
export default Button;

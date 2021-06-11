import React, { Component } from 'react';
import './ButtonAdd.scss';

const ButtonAdd = ({ onClick, children }) => (
  <button className='button__add' onClick={onClick}>
    {children}
  </button>
);
export default ButtonAdd;

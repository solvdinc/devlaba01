import React from 'react';
import './ButtonAdd.scss';
import Spinner from '../assets/spinner.svg';

const ButtonAdd = ({ onClick, loader }) => (
  <button className='button__add' onClick={onClick}>
    {loader && (
      <div className='spinner__container'>
        <img alt="spinner" src={Spinner} className='spinner' />
      </div>
    )}
  </button>
);
export default ButtonAdd;

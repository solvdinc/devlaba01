import React from 'react';
import style from './Button.module.css';
export const Button = ({name, handleClick}) => {
  return (
    <button className={style.btn} onClick={handleClick}>{name}</button>
  );
}

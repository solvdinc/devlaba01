import React from 'react';
import style from './Button.module.css';
const Button = ({ name, handleClick, children, ...props }) => {
  return (
    <button className={style.btn} onClick={handleClick}>{children}</button>
  );
}

export default Button;
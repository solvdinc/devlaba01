import React from 'react';
import './Button.css';

const Button = ({ className, ...rest }) => {
  return <button type="button" className={className} {...rest}></button>;
};

export default Button;

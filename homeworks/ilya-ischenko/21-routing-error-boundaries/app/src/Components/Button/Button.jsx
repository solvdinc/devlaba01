import React from 'react';

import './Button.css';

const Button = ({ children, onClick, mix }) => {
  const className = `button ${mix}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

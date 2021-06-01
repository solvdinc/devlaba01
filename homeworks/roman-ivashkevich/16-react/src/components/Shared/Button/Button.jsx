import React from 'react';
import './Button.css';

const Button = ({ className, children, ...rest }) => {
  return (
    <button
      type="button"
      className={className ? `${className} common-btn` : 'common-btn'}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

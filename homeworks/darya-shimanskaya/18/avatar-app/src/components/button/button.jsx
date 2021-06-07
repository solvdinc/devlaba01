import React from 'react';

const Button = ({ className, children, ...rest }) => {
  return (
    <button type="button" className={className}  {...rest}>
      {children}
    </button>
  );
};

export default Button;

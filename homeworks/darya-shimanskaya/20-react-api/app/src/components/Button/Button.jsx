import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, children, ...rest }) => {
  return (
    <button type='button' className={className} {...rest}>
      {children}
    </button>
  );
};

Button.protoTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Button;
import React from 'react';
import './Add.css'
import PropTypes from 'prop-types';

const Add = ({ ...rest }) => {
  return (
    <div className={'add-item'} {...rest} />
  )
};

Add.propTypes = {
    rest: PropTypes.object,
}

export default Add;
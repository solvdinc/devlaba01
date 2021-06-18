import React from 'react';
import './Avatar.css';
import PropTypes from 'prop-types';
import { ReactComponent as Refresh } from '../../assets/001-refresh.svg';


const Avatar = ({ src, onClick }) => {
  if (typeof src !== 'string') {
    throw new Error();
  }

  return (
    <div className='avatar' >
      <img className='avatar-image' src={src} alt='avatar'/>
      <Refresh className={'avatar-refresh'} onClick={onClick} />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Avatar;

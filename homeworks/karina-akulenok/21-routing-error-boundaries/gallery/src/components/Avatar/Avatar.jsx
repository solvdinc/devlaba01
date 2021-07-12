import React from 'react';
import './Avatar.css';

const Avatar = ({image, onClick, id}) => {
  if (typeof image !== 'string') {
    throw new Error();
  }

  return (
    <div className='avatar-container' onClick={onClick}>
      <img src={image} key={id} alt='avatar' className='avatar' />
      <div className='avatar-refresh'></div>
    </div>
  );
};

export default Avatar;
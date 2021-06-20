import React from 'react';
import './Image.scss';

const Image = ({ index, src, onClick, loader }) => {
  if (typeof src !== 'string') {
    throw new Error();
  }
  return (
    <div className='image'>
      <div
        className='image__container'
        key={index}
        style={{ backgroundImage: `url(${src})` }}
        onClick={onClick}
      >
      </div>
      <div className={loader && 'overlay loading'}></div>
    </div>
  );
};

export default Image;

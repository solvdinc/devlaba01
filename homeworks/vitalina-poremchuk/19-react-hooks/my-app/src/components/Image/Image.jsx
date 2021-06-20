import React from 'react';
import './Image.scss';

const Image = ({ index, src, onClick, loader }) => (
  <div className='container__image'>
    <div
      className='image'
      style={{ backgroundImage: `url(${src})` }}
      onClick={onClick}
    ></div>
    <div className={loader && 'overlay loading'}></div>
  </div>
);

export default Image;

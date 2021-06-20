import './Avatar.css';

import { useEffect } from 'react';

const Avatar = ({ src, click, isLoading }) => {
  useEffect(() => {
    if (typeof src !== 'string') throw new Error(`Wrong url :(`);
  }, [src]);

  return (
    <div className="avatar__container" onClick={click}>
      <img src={src} alt="Avatar" className="avatar" />
      <div className={isLoading ? 'avatar__refresh avatar__loading' : 'avatar__refresh'} />
    </div>
  );
};

Avatar.propTypes = {};

export default Avatar;

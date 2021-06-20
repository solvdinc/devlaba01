import './Avatar.css';

const Avatar = ({ src, click, isLoading }) => {
  return (
    <div className="avatar__container" onClick={click}>
      <img src={src} alt="avatar" className="avatar" />
      <div className={isLoading ? 'avatar__refresh avatar__loading' : 'avatar__refresh'} />
    </div>
  );
};

Avatar.propTypes = {};

export default Avatar;

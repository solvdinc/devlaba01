const Avatar = ({ src, click }) => {
  return (
    <div className="avatar__container" onClick={click}>
      <img src={src} alt="avatar" className="avatar" />
      <div className="avatar__refresh" />
    </div>
  );
};

Avatar.propTypes = {};

export default Avatar;

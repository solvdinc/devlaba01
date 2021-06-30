import './Bar.css';

const Bar = ({ className, height }) => {
  return (
    <div
      className={className ? `${className} bar` : 'bar'}
      style={{ height: height }}
    ></div>
  );
};

export default Bar;

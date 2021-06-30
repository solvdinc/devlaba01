import './Button.css';

const Button = ({ type, onClick, children }) => {
  return (
    <button type={type} className="normal-distribution-btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

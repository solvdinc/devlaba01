import './Button.css';

const Button = ({ children, ...other }) => (
  <button type="button" className="button" {...other}>
    {children}
  </button>
);

export default Button;

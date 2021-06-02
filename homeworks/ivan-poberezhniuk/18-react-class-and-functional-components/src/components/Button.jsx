const Button = ({ children, ...other }) => {
  return (
    <button type="button" className="button" {...other}>
      {children}
    </button>
  );
};

export default Button;

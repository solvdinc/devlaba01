import './Input.css';

const Input = ({ type, max, min, step, disabled, onChange }) => {
  return (
    <input
      type={type}
      max={max}
      min={min}
      step={step}
      className="range-input"
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default Input;

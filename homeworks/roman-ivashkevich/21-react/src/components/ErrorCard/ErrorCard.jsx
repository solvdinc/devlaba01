import { ReactComponent as ErrorSVG } from '../../assets/error.svg';
import './ErrorCard.css';

const ErrorCard = () => {
  return (
    <div className="error-card-container">
      <div className="error-wrapper">
        <ErrorSVG className="error-svg" />
        <button type="button" className="error-btn">
          REFRESH
        </button>
      </div>
    </div>
  );
};

export default ErrorCard;

import ReactDOM from 'react-dom';
import Button from './Button';

import './Modal.css';

const appRoot = document.getElementById('root');

const Modal = ({ children, open, onClose, ...other }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="modal__container" onClick={onClose}>
      <div className="modal" {...other} onClick={(e) => e.stopPropagation()}>
        {children}
        <Button onClick={onClose} arial-label="close modal">
          CLOSE
        </Button>
      </div>
    </div>,
    appRoot
  );
};

export default Modal;

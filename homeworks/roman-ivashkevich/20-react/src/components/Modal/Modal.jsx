import React, { forwardRef } from 'react';
import ReactDOM from 'react-dom';
import { animated } from 'react-spring';

import './Modal.css';

const Modal = forwardRef(
  ({ showModal, setShowModal, modalContent, onClose, animation }, ref) => {
    if (!showModal) return null;

    const closeModal = (e) => {
      if (ref.current === e.target) {
        setShowModal(false);
      }
    };

    return ReactDOM.createPortal(
      <div className="modal" ref={ref} onClick={closeModal}>
        <animated.div style={animation}>
          <div className="modal-dialog">
            <div className="modal-content">{modalContent}</div>
            <button type="button" className="close-btn" onClick={onClose}>
              Close
            </button>
          </div>
        </animated.div>
      </div>,
      document.getElementById('modal-root'),
    );
  },
);

export default Modal;

import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button/Button';
import './Modal.css';
import PropTypes from 'prop-types';

const Modal = ({ children, onClick }) => {
  return ReactDOM.createPortal(
    <div className={'modal-wrapper'}>
      <div className={'modal-container'}>
        <div className={'modal-content'}>{children}</div>
        <div className={'modal-footer'}>
          <Button className={'close-modal-btn'} onClick={onClick}>Close</Button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal'),
  );
};

Modal.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Modal;

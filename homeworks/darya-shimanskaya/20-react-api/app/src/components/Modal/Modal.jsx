import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button/Button';
import './Modal.css';
import PropTypes from 'prop-types';

const Modal = ({ content, callback }) => {
  return ReactDOM.createPortal(
    <div className={'modal-wrapper'}>
      <div className={'modal-container'}>
        <div className={'modal-content'}>{content}</div>
        <div className={'modal-footer'}>
          <Button className={'close-modal-btn'} onClick={callback}>Close</Button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal'),
  );
};

Modal.propTypes = {
  content: PropTypes.string.isRequired,
  callback: PropTypes.func,
}

export default Modal;
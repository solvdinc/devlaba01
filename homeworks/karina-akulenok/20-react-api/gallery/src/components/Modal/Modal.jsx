import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import Button from '../Button/Button'

const Modal = ({onClick, children, showModal}, move) => {
  if (!showModal) return null;

  return ReactDOM.createPortal(
    <div className='modal-window' move={move}>
      <div className='modal-window__container'>
        <div className='modal-window__content'>
          {children}
        </div>
        <Button onClick={onClick}>
          close
        </Button>
      </div>
    </div>,
    document.querySelector('#root'),
  );
};

export default Modal;
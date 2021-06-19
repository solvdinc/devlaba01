import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import Button from '../Button/Button'

const Modal = ({onClick, content, showModal}, move) => {
  if (!showModal) return null;

  return ReactDOM.createPortal(
    <div className='modal-window' move={move}>
      <div className='modal-window__container'>
        <div className='modal-window__content'>
          {content}
        </div>
        <Button name='close' onClick={onClick}/>
      </div>
    </div>,
    document.querySelector('#root'),
  );
};

export default Modal;
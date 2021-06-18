import React from 'react';
import ReactDOM from 'react-dom';
import './ModalWindow.css'

const rootElement = document.querySelector('#root');

const ModalWindow = ({ children, onClick }) => {
  const modal =
    (<div className='modal-window__wrapper' onClick={onClick}>
      <div className='modal-window__contant' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>)

  return ReactDOM.createPortal(modal, rootElement);
}

export default ModalWindow
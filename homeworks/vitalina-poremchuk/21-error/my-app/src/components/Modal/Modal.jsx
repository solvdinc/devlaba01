import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const root = document.querySelector('#root');

const Modal = ({ children, onClick }) => {
  const modal = (
    <div className="modal" onClick={onClick}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <div className="modal__inner"> {children}</div>
       
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, root);
};

export default Modal;

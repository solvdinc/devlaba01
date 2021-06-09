import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

const root = document.querySelector('#root');
function Modal({ children, onClick }) {
  const modal = (
    <div className="modal-wrap" onClick={onClick}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, root);
}

export default Modal;

import React, {useEffect} from 'react';
import ReactDOM from 'react-dom'

import style from './Modal.module.css';
import Button from '../Button/Button';

const usePortal = (id) => {
  const rootElemRef = React.useRef(document.createElement('div'));

  useEffect(function setupElement() {
    const parentElem = document.querySelector(`#${id}`);
    parentElem.appendChild(rootElemRef.current);
    return function removeElement() {
      rootElemRef.current.remove();
    };
  }, [id]);

  return rootElemRef.current;
};

const Modal = ({ children, handleClose }) => {
  const modal = <div className={style.paper}>
    <div className={style.container}>
      <div className={style.modal}>
        <div className={style.content}>{children}</div>
        <div className={style.btnWrapper}>
          <Button handleClick={handleClose}>Close</Button>
        </div>
      </div>
    </div>
  </div>;
  const target = usePortal('root');
  return ReactDOM.createPortal(modal, target);
};

export default Modal;
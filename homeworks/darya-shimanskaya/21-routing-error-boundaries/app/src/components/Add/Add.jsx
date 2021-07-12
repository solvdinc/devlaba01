import React from 'react';
import './Add.css'
import { ReactComponent as Spinner } from '../../assets/001-spinner.svg';

const Add = ({ status, onClick }) => {
  return (
    <div className='add-item' onClick={onClick}>
      {status === 'pending' ? <Spinner className='spinner'/>
        : <div className='add'/>
      }
    </div>
  )
};

export default Add;

import React from 'react';
import Button from '../Button/Button.jsx';
import Error from '../assets/error.svg';
import Refresh from '../assets/refresh.svg';
import './Error.scss';

const ErrorAccess = ({ loader, resetErrorBoundary }) => (
  <div className='error__container'>
    <div className={loader && 'overlay loading'}> </div>

    <div className='refresh__container'>
      <img src={Refresh} alt="refresh" className='refresh' />
    </div>
    <div className='error__inner'>
      <img src={Error} alt='Error' className='error' />
      <Button onClick={resetErrorBoundary}>Refresh</Button>
    </div>
  </div>
);

export default ErrorAccess;

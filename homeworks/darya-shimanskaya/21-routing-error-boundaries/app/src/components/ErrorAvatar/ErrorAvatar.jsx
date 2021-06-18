import React from 'react';
import './ErrorAvatar.css';
import Button from "../Button/Button";
import { ReactComponent as Error } from '../../assets/001-error.svg';


const ErrorAvatar = ({ resetErrorBoundary }) => {
  return (
    <div className='error-avatar'>
      <Error className='error' />
      <Button className={'error-btn'} onClick={resetErrorBoundary}>Refresh</Button>
    </div>
  );
};

export default ErrorAvatar;
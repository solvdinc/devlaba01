import React from 'react';

import style from './ErrorTile.module.css';
import { ReactComponent as ErrorImg } from '../../assets/001-error.svg';
import Button from '../Button/Button';

const ErrorTile = ({ resetErrorBoundary }) => {
  return (
    <div className={style.container}>
      <ErrorImg className={style.img} />
      <div className={style.btnWrapper}>
        <Button handleClick={resetErrorBoundary} backgroundColor="#D47878">
          refresh
        </Button>
      </div>
    </div>
  );
};

export default ErrorTile;

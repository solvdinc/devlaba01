import React from 'react';

import clsx from 'clsx';

import style from './Tile.module.css';
import { ReactComponent as RefreshImg } from '../../assets/001-refresh.svg';
import { ReactComponent as Spinner } from '../../assets/001-spinner.svg';

const Tile = ({ imgLink, handleAdd, handleRefresh, isLoading }) => {
  if (imgLink && typeof imgLink != 'string') {
    throw new TypeError();
  }
  return imgLink || isLoading ? (
    isLoading ? (
      <div className={clsx(style.container, style.border)}>
        <Spinner className={style.spinner} />
      </div>
    ) : (
      <div className={style.container}>
        <div onClick={handleRefresh}>
          <div className={style.imgWrapper}>
            <img src={imgLink} alt="random avatar" className={style.img} />
          </div>
          <div className={style.imgWrapper}>
            <RefreshImg className={style.refreshImg} />
          </div>
        </div>
      </div>
    )
  ) : (
    <div className={clsx(style.container, style.border)}>
      <div className={style.plusBtn} onClick={handleAdd}>
        <div className={clsx(style.line, style._horizontal)}></div>
        <div className={clsx(style.line, style._vertical)}></div>
      </div>
    </div>
  );
};

export default Tile;

import React from 'react';

import clsx from 'clsx';

import style from './Tile.module.css';
import { ReactComponent as RefreshImg } from '../../assets/001-refresh.svg';

const Tile = ({imgLink, handleAdd, handleRefresh}) => {
  return (
    <div className={style.container}>
      {
        imgLink
          ? <div onClick={handleRefresh}>
            <div className={style.imgWrapper}>
              <img src={imgLink} alt='random avatar' className={style.img} />
            </div>
            <div className={style.imgWrapper}>
              <RefreshImg className={clsx(style.refreshImg)} />
            </div>
          </div>
          : <div className={style.plusBtn} onClick={handleAdd}>
            <div className={clsx(style.line, style._horizontal)}></div>
            <div className={clsx(style.line, style._vertical)}></div>
          </div>
      }
    </div>
  );
}

export default Tile;
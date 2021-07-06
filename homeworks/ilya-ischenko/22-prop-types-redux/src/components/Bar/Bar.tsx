import React from 'react';

import styles from './Bar.module.scss';

type BarProps = {
  height: number;
  mix?: string;
};

const Bar = ({ height, mix = '' }: BarProps) => {
  return (
    <div
      className={[styles.bar, styles[mix]].join(' ')}
      style={{ height: `${height}%` }}
    ></div>
  );
};

export default Bar;

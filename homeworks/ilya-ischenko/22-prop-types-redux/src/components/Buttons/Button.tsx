import React from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
  onClick: React.MouseEventHandler;
  children: string | HTMLElement | number;
};

const Button = ({ onClick, children }: ButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);

export default Button;

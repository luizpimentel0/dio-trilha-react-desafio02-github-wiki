import React from 'react';
import styles from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Buscar
    </button>
  );
};

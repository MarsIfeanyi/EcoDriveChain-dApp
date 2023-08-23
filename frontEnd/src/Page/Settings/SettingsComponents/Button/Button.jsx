import React from 'react';
import styles from './buttonStyles.module.css';

function Button({text, customStyle, handleClick}) {
  return (
    <button className={styles['green-btn']} style={customStyle} onClick={handleClick}>
        {text}
    </button>
  )
}

export default Button

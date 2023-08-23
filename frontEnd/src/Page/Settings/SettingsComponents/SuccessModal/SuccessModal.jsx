import React from 'react';
import styles from './success.module.css';
import Button from '../Button/Button';

function SuccessModal() {
  return (
    <div className={styles['success-modal']}>
      <article className={styles['checkmark-container']}>
        <h1>&#10003;</h1>
      </article>

      <h1 className={styles['awesome']}>Awesome&#33;</h1>
      <p>Saved succesfully</p>

      <Button text='Continue'/>
    </div>
  )
}

export default SuccessModal

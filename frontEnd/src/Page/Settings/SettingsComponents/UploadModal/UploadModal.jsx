import React from 'react';
import styles from './upload.module.css';
import img from '../../../../assets/icon@2x.png';

function UploadModal() {
  return (
    <div className={styles["upload-modal"]}>
      <img src={img} alt="" />
      <p  className={styles['subtitle']}>
        <span className={styles['green-section']}>Upload a file </span>or drag and drop
      </p>
      <p className={styles['illustration']}>PNG, JPG, GIF upto 5MB</p>
    </div>
  )
}

export default UploadModal

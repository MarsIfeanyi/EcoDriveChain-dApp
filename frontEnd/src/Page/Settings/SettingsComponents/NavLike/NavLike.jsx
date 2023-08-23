import React from 'react';
import styles from './navlike.module.css';
import img from '../../../../assets/Ellipse 7.png';

function NavLike() {
  return (
    <div className={styles['snavlike']}>
      <h1>Settings</h1>

      <section>
        <figure>
          <img src={img} alt="" />
        </figure>

        <article>
          <p className={styles['name']}>Chioma Sheila</p>
          <p className={styles['email']}>Iamchioma@gmail.com</p>
        </article>
      </section>
    </div>
  )
}

export default NavLike

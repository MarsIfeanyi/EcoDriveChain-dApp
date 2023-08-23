import  { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './userCard.module.css';
import PropTypes from "prop-types";
import camera from '../../../../assets/Icon.png';



import { useContext } from "react";
import AuthContext from '../../../../context/AuthProvider';



function UserCard({name, email}) {
  const [activeItem, setActiveItem] = useState('dashboard/settings');
  const location = useLocation();
  const { auth } = useContext(AuthContext);

  //Update activeItem based on currentlocation
  useEffect(() => {
    if(location.pathname === '/dashboard/settings'){
      setActiveItem('profile');
    }else if(location.pathname === '/dashboard/settings/password'){
      setActiveItem('password');
    }
  }, [location])


  const activeBackgroundColor = "#8bc34a";


  const activeLinkStyle = {
    backgroundColor: activeBackgroundColor,
    textDecoration: "none",
    color: "#fff",
  };

  return (
    <div className={styles['user-card']}>
      <section className={styles['section-1']} >
        <div> 
            <figure>
              <img src={auth?.user?.imageUrl} alt="" />
            </figure>
            <button type='file' className={styles['icon-container']}> <img src={camera} alt="" /></button>            
        </div>

        <article>
          <p className={styles['name']}>{name}</p>
          <p className={styles['email']}>{email}</p>
        </article>
      </section>

      <p className={styles['demarcation']}></p>

      <section className={styles['section-2']}>
        <Link
            className={styles['link_style']}
            to=''
            style={activeItem === "profile" ? activeLinkStyle : {}}
        >
          Profile
        </Link>

      
        <Link
          className={styles['link_style']}
          to='password'
          style={activeItem === "password" ? activeLinkStyle : {}}
        >
            Password
        </Link>

      </section>
    </div>
  )
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default UserCard

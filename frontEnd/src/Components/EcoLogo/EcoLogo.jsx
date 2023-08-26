import React from 'react'
import styles from './ecoLogo.module.css'
import Log from '../../assets/biggest.png'
import PropTypes from 'prop-types';

function EcoLogo({textStyles}) {
  return (
    <div className={styles.logoContainer} >
      <img src={Log} alt="EcoDriveChain"  />
      <p style={textStyles}>EcoDriveChain</p>
    </div>
  )
}

EcoLogo.propTypes = {
    textStyles: PropTypes.object.isRequired,
}

export default EcoLogo

import styles from './watchlistPill.module.css'
import PropTypes from 'prop-types'

function WatchListPill({customStyle, img, coinABV, transact, value, percentChange }) {
  return (
    <div className={styles.pill}>
      <div className={styles['section-1']}>
        <figure style={customStyle}>
          <img src={img} />
        </figure>

        <section className={styles['details-container']}>
          <h1>{coinABV}</h1>
          <p>{transact}</p>
        </section>
      </div>
      
      <section className={styles['section-2']}>
        <p className={styles['value']}>{value}</p>
        <p className={styles['percent']}>{percentChange}</p>
      </section>
      
    </div>
  );
};

WatchListPill.propTypes = {
  customStyle: PropTypes.object,
  img: PropTypes.string.isRequired,
  coinABV: PropTypes.string.isRequired,
  transact: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  percentChange: PropTypes.string.isRequired,
};

export default WatchListPill

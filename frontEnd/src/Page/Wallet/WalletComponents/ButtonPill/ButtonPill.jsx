import styles from './buttonPill.module.css'
import PropTypes from 'prop-types'

function ButtonPill({img, action, handleClick }) {
  return (
    <button className={styles['grey-btn']}onClick={ handleClick } >
      <img src={img} alt="" />
      <p>{action}</p>
      <span>&gt;</span>
    </button>
  );
};

ButtonPill.propTypes = {
  img: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default ButtonPill

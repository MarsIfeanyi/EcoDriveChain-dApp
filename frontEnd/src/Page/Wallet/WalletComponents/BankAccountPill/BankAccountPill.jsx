import styles from './bankAccountPill.module.css'
import PropTypes from 'prop-types'
function BankAccountPill({ name, account, bank, customStyle }) {
  return (
    <div style={customStyle} className={styles['bnk-account-pill']}>
      <h1>{name}</h1>
      <p>{account}</p>
      <p>{bank}</p>
    </div>
  );
};

BankAccountPill.propTypes = {
  name: PropTypes.string.isRequired,
  account: PropTypes.string.isRequired,
  bank: PropTypes.string.isRequired,
  customStyle: PropTypes.object.isRequired
};


export default BankAccountPill

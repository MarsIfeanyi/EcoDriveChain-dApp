import styles from './sendFundsConfirm.module.css'
import Goback from '../GoBackPill/Goback'
import Button from '../../../Settings/SettingsComponents/Button/Button'


function SendFundsConfirm() {
  return (
    <div className={styles['layout']}>
      <Goback/>

      <section className={styles['title-container']}>
        <h1 className={styles['title']}>Send funds</h1>
        <p className={styles['subtitle']}>Summary</p>
      </section>


      <article className={styles['transaction-summary']}>
        <span>Amount</span> <p className={styles['amount']}>NGN 2,000</p>
        <span>Recipient</span><p>Chioma Shiela</p>
        <span>Bank Name</span><p>United Bank For Africa</p>
        <span>Bank Account Number</span><p>2395458</p>
      </article>

      <p className={styles['warning']}>
        By clicking send money, I authorize BIRC to initiate the transaction detailed above.
      </p>

      <Button text='Continue' customStyle={{'width': '96%'}}/>
    </div>
  )
}

export default SendFundsConfirm

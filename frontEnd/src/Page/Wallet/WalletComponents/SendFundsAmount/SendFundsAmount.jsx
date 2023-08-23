import Button from '../../../Settings/SettingsComponents/Button/Button'
import Goback from '../GoBackPill/Goback'
import styles from './sendFundsAmount.module.css'
import { useNavigate } from 'react-router-dom'

function SendFundsAmount() {
  const navigate = useNavigate()

  function nextPage(){
    navigate('/dashboard/wallet/send-funds-confirm')
  }

  return (
    <div className={styles['layout']}>
      <Goback/>

      <section className={styles['title-container']}>
        <h1 className={styles['title']}>Send funds</h1>
        <p className={styles['subtitle']}>Input amount to send</p>
      </section>

      <p className={styles['warning']}>
        Minimum withdrawal amount is NGN2,000
      </p>

      <form>
        <label className={styles['form-title']} htmlFor="amount">Amount</label>
        <input type="number"  id="amount"  placeholder='NGN 2000'/>
        <div className={styles['details-container']}>
          <p className={styles['balance']}>NGN Balance</p>
          <p className={styles['value']}>3,567</p>
        </div>
      </form>

      <article className={styles['exchange']}>
        <p className={styles['describ']}>Exchange rate</p>
        <p className={styles['rate']}>1 USDC = NGN 460</p>
      </article>

      <Button text='Continue' customStyle={{'width': '96%'}} handleClick={ nextPage }/>
    </div>
  )
}

export default SendFundsAmount

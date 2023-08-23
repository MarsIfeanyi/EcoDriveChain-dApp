import styles from './convertFunds.module.css'
import Goback from '../GoBackPill/Goback'
import Button from '../../../Settings/SettingsComponents/Button/Button'

function ConvertFunds() {
  return (
     <div className={styles['layout']}>
      <Goback/>

      <section className={styles['title-container']}>
        <h1 className={styles['title']}>Convert funds</h1>
      </section>

      <form>
        <label className={styles['form-title']} htmlFor="amount">Amount to  convert</label>
        <input type="number"  id="amount"  placeholder='USDC 20'/>

        <div className={styles['details-container']}>
          <p className={styles['balance']}>USDC Balance</p>
          <p className={styles['value']}>234</p>
        </div>
      </form>

      
      <form>
        <label className={styles['form-title']} htmlFor="amount">You'll get</label>
        <input type="number"  id="amount"  placeholder='NGN 20'/>

        <div className={styles['details-container']}>
          <p className={styles['balance']}>NGN Balance</p>
          <p className={styles['value']}>3,567</p>
        </div>
      </form>

      <article className={styles['exchange']}>
        <p className={styles['describ']}>Exchange rate</p>
        <p className={styles['rate']}>1 USDC = NGN 460</p>
      </article>

      <Button text='Continue' customStyle={{'width': '96%'}}/>
    </div>
  )
}

export default ConvertFunds

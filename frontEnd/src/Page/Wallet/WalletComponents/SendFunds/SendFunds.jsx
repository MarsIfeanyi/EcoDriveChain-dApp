import Goback from '../GoBackPill/Goback'
import styles from './sendFunds.module.css'
import IC from '../../../../assets/bankIcon.png'
import BankAccountPill from '../BankAccountPill/BankAccountPill'
import Button from '../../../Settings/SettingsComponents/Button/Button'
import { useNavigate } from 'react-router-dom'

function SendFunds() {

  const navigate = useNavigate()

  function nextPage(){
    navigate('/dashboard/wallet/send-funds-amount')
  }


  return (
    <div className={styles['layout']}>
      <Goback/>

      <section className={styles['title-container']}>
        <h1 className={styles['title']}>Send funds</h1>
        <p className={styles['subtitle']}>Choose recipient</p>
      </section>

      <p className={styles['warning']}>
        Kindly note that you have to convert your USDC to local fiat currency before you can withdraw to local bank.
      </p>

      <section className={styles['bnk-details-container']}>
          <button className={styles['add-account-btn']}>
            <img src={IC} alt="" />
            <p>Add a new bank account</p>
          </button>

          <BankAccountPill
            name='Chioma Shiela'
            account='2395458'
            bank='United Bank For Africa'
            customStyle={{'background':'#E1E6EF'}}
            />

          <BankAccountPill
            name='Chioma Shiela'
            account='45756768'
            bank='First Bank'
            />
      </section>

      <Button text='Continue' customStyle={{'width': '100%'}} handleClick={ nextPage }/>
    </div>
  )
}

export default SendFunds

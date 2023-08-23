import styles from './walletMain.module.css'
import ButtonPill from '../ButtonPill/ButtonPill'
import BalancePill from '../BalancePill/BalancePill'
import WatchListCard from '../WatchListCard/WatchListCard'
import TransactionHistory from '../../../../Components/TransactionHistory/TransactionHistory'


import IC1 from '../../../../assets/Usdc.png'
import IC2 from '../../../../assets/naira.png'
import btn1 from '../../../../assets/rewind.png'
import btn2 from '../../../../assets/play.png'

import { useNavigate } from 'react-router-dom'

function WalletMain() {
  const navigate = useNavigate()

  function handleConvert(){
    navigate('/dashboard/wallet/convert-funds')
  }

  function handleSend(){
    navigate('/dashboard/wallet/send-funds')
  }

  return (
      <div className={styles['layout-1']}>
          <section className={styles['btn-container']}>
                
                <ButtonPill img={btn1} action='convert' handleClick={handleConvert}/>
                <ButtonPill img={btn2} action='send' handleClick={handleSend}/>
          </section>

          <section className={styles['balance-pill-container']}>
            <BalancePill img={IC1} currency='USDC' customStyle={{'background':'#D1E9FF'}}/>
            <BalancePill img={IC2} currency='NGN' customStyle={{'background':'#FEF0C7'}}/>
          </section>

          <section className={styles['balance-pill-container']}>
            <TransactionHistory/>
            <WatchListCard/>
          </section>
        </div>
  )
}

export default WalletMain

import styles from './watchlistcard.module.css'
import WatchListPill from '../WatchListPill/WatchListPill'
import btc from '../../../../assets/btc.png'
import dodge from '../../../../assets/dodge.png'
import eth from '../../../../assets/eth.png'
import ltc from '../../../../assets/ltc.png'




function WatchListCard() {
  return (
    <div className={styles.card}>
      <section className={styles['section-1']}>
        <h1> Watch List</h1>
      </section>
      
      <section className={styles['section-2']}>
        <WatchListPill 
          img={btc}
          coinABV='BTC'
          transact='BTC/USDC'
          value='42,000'
          percentChange='+16%'
          />
        <WatchListPill 
          img={eth}
          coinABV='ETH'
          transact='ETH/USDC'
          value='2,356'
          percentChange='+16%'
          />
        <WatchListPill 
          img={ltc}
          coinABV='LTC'
          transact='LTC/USDC'
          value='16,050'
          percentChange='-34%'
          />
        <WatchListPill 
          img={dodge}
          coinABV='DND'
          transact='DND/USDC'
          value='12,000'
          percentChange='+27%'
          />
          <WatchListPill 
          img={btc}
          coinABV='BTC'
          transact='BTC/USDC'
          value='42,000'
          percentChange='+16%'
          />
      </section>
    </div>
  )
}

export default WatchListCard

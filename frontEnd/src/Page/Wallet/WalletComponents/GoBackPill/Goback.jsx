import styles from './goback.module.css'
import { useNavigate } from 'react-router-dom'



function Goback() {
  const navigate = useNavigate()

  function goBack(){
    navigate(-1)
  }

  return (
    <button onClick={ goBack } className={styles['go-back']}><span>&#8592;</span> Go back</button>
  )
}

export default Goback

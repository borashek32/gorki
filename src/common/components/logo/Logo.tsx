import styles from './Logo.module.css'
import logo from './../../assets/img/logo/new-design/dsk-gorki300.png'

export const Logo = () => {

  return (
    <div className={styles.logoWrapper}>
      <a href="/">
        <img src={logo} alt="gorki" />
      </a>
    </div>
  )
} 
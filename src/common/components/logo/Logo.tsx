import styles from './Logo.module.css'
import logo from './../../assets/img/logo/new-design/dsk-gorki300.png'
import { NavLink } from 'react-router-dom'

export const Logo = () => {

  return (
    <NavLink to={'/'}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="gorki" />
      </div>
    </NavLink>
  )
} 
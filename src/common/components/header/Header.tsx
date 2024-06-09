import { useState } from 'react'
import styles from './Header.module.css'
import { useTheme } from '../../providers/theme/ThemeProvider'
import { SwitchButton } from '../switch-button/SwitchButton'
import { Link } from 'react-scroll'
import { Logo } from '../logo/Logo'

export const Header = () => {
  const [active, setActive] = useState(false)
  const { theme, setTheme } = useTheme()
  console.log(active);
  

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const handleSetActive = () => {
    setActive(false)
  }

  return (
    <header>
      <div className={styles.headerTopWrapper}>
        <a href="tel:+79169174630">клуб "горки": +7 (916) 917-46-30</a>
      </div>

      <div className={styles.headerWrapper}>
        <Logo />
        <nav>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <Link 
                to="promo"
                activeClass="active" 
                spy={true} 
                smooth={true} 
                offset={-150} 
                duration={500} 
                onSetActive={handleSetActive}
              >
                В начало
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link 
                to="about"
                activeClass="active" 
                spy={true} 
                smooth={true} 
                offset={-200} 
                duration={500} 
                onSetActive={handleSetActive}
              >
                О нас
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link 
                to="workout"
                activeClass="active" 
                spy={true} 
                smooth={true} 
                offset={-200} 
                duration={500} 
                onSetActive={handleSetActive}
              >
                Тренировки
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link 
                to="champions"
                activeClass="active" 
                spy={true} 
                smooth={true} 
                offset={-200} 
                duration={500} 
                onSetActive={handleSetActive}
              >
                Наши чемпионы
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link 
                to="gallery"
                activeClass="active" 
                spy={true} 
                smooth={true} 
                offset={-200} 
                duration={500} 
                onSetActive={handleSetActive}
              >
                Галерея
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link 
                to="trainer"
                activeClass="active" 
                spy={true} 
                smooth={true} 
                offset={-200} 
                duration={500} 
                onSetActive={handleSetActive}
              >
                Тренер
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link 
                to="contacts"
                activeClass="active" 
                spy={true} 
                smooth={true} 
                offset={-200} 
                duration={500} 
                onSetActive={handleSetActive}
              >
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <SwitchButton 
          onClick={changeTheme} 
          value={theme}
        />
      </div>
    </header>
  )
}
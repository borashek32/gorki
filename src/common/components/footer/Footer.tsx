import styles from './Footer.module.css'
import phone from './../../assets/img/icons/call.svg'
import letter from './../../assets/img/icons/mail.svg'
import address from './../../assets/img/icons/map.svg'
import { Logo } from '../logo/Logo'
import webDesign from './../../assets/img/logo.jpg'
import { NavLink } from 'react-router-dom'
import { Button } from '../button/Button'

export const Footer = () => {

  return (
    <footer className={styles.footerWrapperImg} id='contacts'>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContainer}>
          <div className={styles.mapWrapper}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11901600.524008999!2d60.07529536544234!3d60.49181291571263!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1719909997063!5m2!1sru!2sru"></iframe>
            <NavLink to='/address'>
              <Button
                type='button'
                size='sm'
                color='blue'
                title='Схема проезда'
              />
            </NavLink>
          </div>
          <div className={styles.contactsSection}>
            <Logo />
            <ul className={styles.contactsList}>
              <li className={styles.contactsItem}>
                <img src={address} alt="address" />
                <p>г. Москва, ул. Удальцова, 101к3, кв.23</p>
              </li>
              <li className={styles.contactsItem}>
                <img src={phone} alt="phone" />
                <a href="tel:+79169174630">
                  <p>+7 (916) 917-46-30</p>
                </a>
              </li>
              <li className={styles.contactsItem}>
                <img src={letter} alt="mail" />
                <a href="mailto:borashek@inbox.ru">
                  <p>info@dsk-gorki.com</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer}>
          <img src={webDesign} alt="web design - new creation" width={60} />
          <p>© All rights reserved</p>
          <a href="https://borashek32.github.io/portfolio/" target='_blanc'>
            <p>Web design new creation</p>
          </a>
        </div>
      </div>
    </footer>
  )
}
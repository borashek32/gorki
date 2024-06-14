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
            <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9766.904825708481!2d36.96060204082207!3d55.21082034392453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aacb1d26fc219%3A0x57abaa0fec868038!2z0JPQvtGA0LrQuA!5e0!3m2!1sru!2sru!4v1717941735819!5m2!1sru!2sru" loading="lazy"></iframe>
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
                <p>г. Москва, 62 км от МКАД по А-130, д. Каменка, 108835</p>
              </li>
              <li className={styles.contactsItem}>
                <img src={phone} alt="phone" />
                <a href="tel:+79855727516">
                  <p>+7 (985) 572-75-16</p>
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
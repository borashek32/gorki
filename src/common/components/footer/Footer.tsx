import styles from './Footer.module.css'
import phone from './../../assets/img/icons/phone.png'
import letter from './../../assets/img/icons/letter.png'
import fb from './../../assets/img/icons/fb.svg'
import tw from './../../assets/img/icons/twitter.png'
import youtube from './../../assets/img/icons/youtube.png'
import { Logo } from '../logo/Logo'

export const Footer = () => {

  return (
    <footer className={styles.footerWrapperImg} id='contacts'>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContainer}>
          <div className={styles.mapWrapper}>
            <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9766.904825708481!2d36.96060204082207!3d55.21082034392453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aacb1d26fc219%3A0x57abaa0fec868038!2z0JPQvtGA0LrQuA!5e0!3m2!1sru!2sru!4v1717941735819!5m2!1sru!2sru" loading="lazy"></iframe>
            <p>При движении из Москвы поворачиваете на право перед заправкой GP, далее едете прямо примерно 200 метов до въезда на территорию бывшего детского лагеря "Горки". Едете прямо по территории лагеря до парковки.</p>
          </div>
          <div className={styles.contactsSection}>
            <Logo />
            <ul className={styles.contactsList}>
              <li className={styles.contactsItem}>
                <img src={phone} alt="address" />
                <p>62 км от МКАД по, А-130, Каменка, Москва, 108835</p>
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
            <div className={styles.social}>
              <a href='#' className={styles.imgWrapper}>
                <img src={fb} alt="facebook" />
              </a>
              <a href='#' className={styles.imgWrapper}>
                <img src={tw} alt="twitter" />
              </a>
              <a href='https://www.youtube.com/@klubgorki' className={styles.imgWrapper}>
                <img src={youtube} alt="youtube" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <p>Copyright 2024 . All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
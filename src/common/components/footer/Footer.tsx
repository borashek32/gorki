import styles from './Footer.module.css'
import phone from './../../assets/img/icons/call.svg'
import letter from './../../assets/img/icons/mail.svg'
import address from './../../assets/img/icons/map.svg'
import vk from './../../assets/img/icons/vk.svg'
import ig from './../../assets/img/icons/ig.svg'
import tiktok from './../../assets/img/icons/tiktok.svg'
import youtube from './../../assets/img/icons/youtube.svg'
import { Logo } from '../logo/Logo'
import webDesign from './../../assets/img/logo.jpg'

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
                <img src={address} alt="address" />
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
              <a href='https://vk.com/klubgorki' className={styles.imgWrapper} target='_blank'>
                <img src={vk} alt="vkontakte" />
              </a>
              <a href='https://www.instagram.com/klub_gorki/' className={styles.imgWrapper} target='_blank'>
                <img src={ig} alt="instagram" />
              </a>
              <a href='https://www.youtube.com/@klubgorki' className={styles.imgWrapper} target='_blank'>
                <img src={youtube} alt="youtube" />
              </a>
              <a href='#' className={styles.imgWrapper} target='_blank'>
                <img src={tiktok} alt="tiktok" />
              </a>
            </div>
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
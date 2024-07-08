import styles from './Promo.module.css'
import promo from './../../assets/img/promo.jpg'
import { Button } from '../button/Button'

export const Promo = () => {

  return (
    <section id='promo' className={styles.promo}>
      <div className={styles.promoWrapper}>
        <div className={styles.promoHeaderWrapper}>
          <div className={styles.promoHeader}>
            <h1>Детский спортивный<br></br><span>клуб</span> единоборств</h1>
            <p>Единоборства - дисциплина, спорт, борьба.</p>
            <a href="tel:+79169174630">
              <Button
                size='sm'
                color='blue'
                type='button'
                title='Позвоните нам'
              />
            </a>
          </div>
        </div>
        <div className={styles.promoImgWrapper}>
          <img src={promo} alt="outside front view" />
        </div>
      </div>
    </section>
  )
}
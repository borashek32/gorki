import styles from './Promo.module.css'
import promo from './../../assets/img/promo.jpg'
import { Button } from '../button/Button'

export const Promo = () => {

  return (
    <section id='promo' className={styles.promo}>
      <div className={styles.promoWrapper}>
        <div className={styles.promoHeaderWrapper}>
          <div className={styles.promoHeader}>
            <h1>Детский спортивный клуб <span>"Горки"</span></h1>
            <p>Боевое самбо - дисциплина, спорт, борьба.</p>
            <a href="tel:+79855727516">
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
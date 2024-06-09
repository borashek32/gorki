import styles from './Promo.module.css'
import promo from './../../common/assets/img/promo.jpg'
import { Button } from '../../common/components/button/Button'

export const Promo = () => {

  return (
    <section id='promo' className={styles.promo}>
      <div className={styles.promoWrapper}>
        <div className={styles.promoHeaderWrapper}>
          <div className={styles.promoHeader}>
            <h1>Детский спортивный клуб единоборств <span>"Горки"</span></h1>
            <p>детский спортивный клуб единоборств: самбо, боевое самбо</p>
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
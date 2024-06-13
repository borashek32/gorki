import styles from './Trainer.module.css'
import winner6 from './../../../common/assets/img/winners/6.jpeg'

export const Trainer = () => {

  return (
    <section id='trainer'>
      <h2 className={styles.trainerHeader}>Тренер Мухаммад Абдуллоев</h2>
      <div className={styles.trainer}>
        <div className={styles.imgWrapper}>
          <img src={winner6} alt="trainer" />
        </div>
        <div className={styles.desc}>
          <p>Мастер спорта международного класса</p>
          <ul>
            <li>
              <h3>1 место</h3>
              <p>Чемпионат центрального федерального округа по профессиональному боевому самбо</p>
              <p>2024 г.</p>
            </li>
            
          </ul>
        </div>
      </div>
    </section>
  )
}
import styles from './Workout.module.css'
import workout from './../../common/assets/img/sambo.png'
import ok from './../../common/assets/img/icons/ok.svg'

export const Workout = () => {

  return (
    <section id='workout' className={styles.listItemsWrapper}>
      <h2 className={styles.listItemsHeader}>Занятия самбо и другими единоборствами развивают:</h2>  
      <p className={styles.listItemsSubHeader}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptates ex, facere quibusdam similique id vel libero minus vitae esse, adipisci incidunt tempore. Eveniet alias esse deleniti non, libero consequatur itaque optio error obcaecati. Assumenda placeat dolores minus quae suscipit praesentium ratione mollitia, sint fugit vero, alias quos illum hic.</p>
      <div className={styles.listWrapper}>
        <div className={styles.imgWrapper}>
          <img src={workout} alt="workout" />
        </div>
        <div className={styles.listItems}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src={ok} alt="ok" />
              <p>Выносливость</p>
            </li>
            <li className={styles.item}>
              <img src={ok} alt="ok" />
              <p>Координацию</p>
            </li>
            <li className={styles.item}>
              <img src={ok} alt="ok" />
              <p>Силу</p>
            </li>
            <li className={styles.item}>
              <img src={ok} alt="ok" />
              <p>Ловкость</p>
            </li>
            <li className={styles.item}>
              <img src={ok} alt="ok" />
              <p>Быстроту реакции</p>
            </li>
            <li className={styles.item}>
              <img src={ok} alt="ok" />
              <p>Волю к победе</p>
            </li>
            <li className={styles.item}>
              <img src={ok} alt="ok" />
              <p>Самоконтроль</p>
            </li>
            <li className={styles.item}>
              <img src={ok} alt="ok" />
              <p>Самосовершенствование</p>
            </li>
            <li className={styles.item}>
              <img src={ok} alt="ok" />
              <p>Внимание</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
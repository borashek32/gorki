import styles from './Trainer.module.css'
import ch1 from './../../common/assets/img/champions/ch1.jpg'

export const Trainer = () => {

  return (
    <section id='trainer'>
      <h2>Тренер Мухаммад Абдуллоев</h2>
      <div className={styles.trainer}>
        <div className={styles.imgWrapper}>
          <img src={ch1} alt="trainer" />
        </div>
        <div className={styles.desc}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci assumenda ratione laudantium beatae cupiditate, vitae voluptates iure quos possimus. Repellendus dolore labore error nostrum eveniet non fuga, provident qui. Repudiandae ipsam obcaecati cum saepe deleniti ab corporis consequatur voluptate quis sapiente accusantium adipisci officiis delectus quaerat, fugiat, earum architecto dolor accusamus? Obcaecati suscipit aperiam beatae architecto quos molestiae...</p>
          <ul>
            <li>
              <p>Победитель региональных соревнований по боевому самбо</p>
              <p>12.03.2014</p>
            </li>
            <li>
              <p>Победитель региональных соревнований по боевому самбо</p>
              <p>12.03.2014</p>
            </li>
            <li>
              <p>Победитель региональных соревнований по боевому самбо</p>
              <p>12.03.2014</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
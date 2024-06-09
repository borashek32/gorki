import styles from './About.module.css'
import video from './../../common/assets/video/about.mp4'
import { Button } from '../../common/components/button/Button'

export const About = () => {
  return (
    <section id='about'>
      <h2>О нас</h2>
      <div className={styles.about}>
        <div className={styles.videoWrapper}>
          <video 
            src={video}
            autoPlay
            loop
            controls
          ></video>
        </div>
        <div className={styles.desc}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci assumenda ratione laudantium beatae cupiditate, vitae voluptates iure quos possimus. Repellendus dolore labore error nostrum eveniet non fuga, provident qui. Repudiandae ipsam obcaecati cum saepe deleniti ab corporis consequatur voluptate quis sapiente accusantium adipisci officiis delectus quaerat, fugiat, earum architecto dolor accusamus? Obcaecati suscipit aperiam beatae architecto quos molestiae repudiandae perspiciatis, in ab illo culpa non dolorum ratione qui autem eum...</p>
          <Button
            type='button'
            size='sm'
            color='blue'
            title='Подробнее'
          />
        </div>
      </div>
    </section>
  )
}
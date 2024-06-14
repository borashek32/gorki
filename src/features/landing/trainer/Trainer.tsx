import styles from './Trainer.module.css'
import winner6 from './../../../common/assets/img/winners/6.jpeg'
import vk from './../../../common/assets/img/icons/vk.svg'
import ig from './../../../common/assets/img/icons/ig.svg'
import tiktok from './../../../common/assets/img/icons/tiktok.svg'
import youtube from './../../../common/assets/img/icons/youtube.svg'

export const Trainer = () => {

  return (
    <section id='trainer'>
      <h2 className={styles.trainerHeader}>Тренер Мухаммад Абдуллоев</h2>
      <div className={styles.trainer}>
        <div className={styles.imgWrapper}>
          <img src={winner6} alt="trainer" />
        </div>
        <div className={styles.desc}>
          <h3>Личные соц сети тренера</h3>
          <div className={styles.social}>
            <a href='https://vk.com/klubgorki' className={styles.socialImgWrapper} target='_blank'>
              <img src={vk} alt="vkontakte" />
            </a>
            <a href='https://www.instagram.com/klub_gorki/' className={styles.socialImgWrapper} target='_blank'>
              <img src={ig} alt="instagram" />
            </a>
            <a href='https://www.youtube.com/@klubgorki' className={styles.socialImgWrapper} target='_blank'>
              <img src={youtube} alt="youtube" />
            </a>
            <a href='#' className={styles.socialImgWrapper} target='_blank'>
              <img src={tiktok} alt="tiktok" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
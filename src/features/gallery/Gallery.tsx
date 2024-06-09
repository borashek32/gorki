import styles from './Gallery.module.css'
import ch1 from './../../common/assets/img/champions/ch1.jpg'

export const Gallery = () => {

  return (
    <section id='gallery' className={styles.gallery}>
      <h2 className={styles.galleryHeader}>Галерея</h2>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryGridItem}>
          <img src={ch1} alt="album" />
          <div className={styles.galleryItemDesc}>
            <h6>Чемпионат г.Москвы</h6>
            <p>12.09.2024</p>
          </div>
        </div>
        <div className={styles.galleryGridItem}>
          <img src={ch1} alt="album" /> 
          <div className={styles.galleryItemDesc}>
            <h6>Чемпионат г.Москвы</h6>
            <p>12.09.2024</p>
          </div>
        </div>
        <div className={styles.galleryGridItem}>
          <img src={ch1} alt="album" />
          <div className={styles.galleryItemDesc}>
            <h6>Чемпионат г.Москвы</h6>
            <p>12.09.2024</p>
          </div>
        </div>
        <div className={styles.galleryGridItem}>
          <img src={ch1} alt="album" />
          <div className={styles.galleryItemDesc}>
            <h6>Чемпионат г.Москвы</h6>
            <p>12.09.2024</p>
          </div>
        </div>
        <div className={styles.galleryGridItem}>
          <img src={ch1} alt="album" />
          <div className={styles.galleryItemDesc}>
            <h6>Чемпионат г.Москвы</h6>
            <p>12.09.2024</p>
          </div>
        </div>
        <div className={styles.galleryGridItem}>
          <img src={ch1} alt="album" />
          <div className={styles.galleryItemDesc}>
            <h6>Чемпионат г.Москвы</h6>
            <p>12.09.2024</p>
          </div>
        </div>
        <div className={styles.galleryGridItem}>
          <img src={ch1} alt="album" />
          <div className={styles.galleryItemDesc}>
            <h6>Чемпионат г.Москвы</h6>
            <p>12.09.2024</p>
          </div>
        </div>
      </div>
    </section>
  )
}
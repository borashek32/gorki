import styles from './Map.module.css'
// import mapBig from './../../common/assets/img/map/map-big.png'
// import mapSmall from './../../common/assets/img/map/map-small.png'
import { IframeMap } from '../../common/components/iframe-map/IframeMap'

export const Map = () => {

  return (
    <section>
      <div className={styles.mapHeader}>
        <h2>Схема проезда</h2>
      </div>
      <div className={styles.address}>
        <div className={styles.map}>
          <IframeMap />
          <div>
            <p>г. Москва, ул. Удальцова, 101к3, кв.23</p>
            <a href="tel:+79169174630">
              <p>+7 (916) 917-46-30</p>
            </a>
          </div>
        </div>
        {/* <div className={styles.map}>
          <img src={mapBig} alt="большая карта" />
          <p>При движении из Москвы поворачиваете на право перед заправкой GP, далее едете прямо примерно 200 метов до въезда на территорию бывшего детского лагеря. Ворота всегда открыты. Проезжаете проходную.</p>
        </div>
        <div className={styles.map}>
          <img src={mapSmall} alt="маленькая карта" />
          <p>Едете прямо по территории лагеря до парковки. Далее, по схеме идете к корпусу, поднимаетесь на второй этаж, в холле поворачиваете направо, заходите в первую дверь, опять направо и проходите до конца коридора. Перед вами дверь в спортивный зал.</p>
        </div> */}
      </div>
    </section>
  )
}
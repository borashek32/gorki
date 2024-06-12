import styles from './Map.module.css'
import mapBig from './../../common/assets/img/map-big.jpg'
import mapSmall from './../../common/assets/img/map-small.jpg'
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
            <p>г. Москва, 62 км от МКАД по А-130, д. Каменка, 108835</p>
            <a href="tel:+79855727516">
              <p>+7 (985) 572-75-16</p>
            </a>
          </div>
        </div>
        <div className={styles.map}>
          <img src={mapBig} alt="большая карта" />
          <p>При движении из Москвы поворачиваете на право перед заправкой GP, далее едете прямо примерно 200 метов до въезда на территорию бывшего детского лагеря "Горки". Ворота всегда открыты. Проезжаете проходную.</p>
        </div>
        <div className={styles.map}>
          <img src={mapSmall} alt="маленькая карта" />
          <p>Едете прямо по территории лагеря до парковки. Далее, по схеме идете к корпусу, поднимаетесь на второй этаж, в холле поворачиваете направо, заходите в первую дверь, опять направо и проходите до конца коридора. Перед вами дверь в спортивный зал.</p>
        </div>
      </div>
    </section>
  )
}
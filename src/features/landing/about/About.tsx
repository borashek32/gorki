import styles from './About.module.css'
// import video from './../../../common/assets/video/about1.mp4'

export const About = () => {
  return (
    <section id='about'>
      <h2 className={styles.aboutHeader}>О нас</h2>
      <div className={styles.about}>
        <div className={styles.mediaWrapper}>
          {/* <video 
            src={video}
            autoPlay
            loop
            controls
          ></video> */}
          <div className={styles.videoWrapper}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/h_BF38vznZw?si=ZsreU3IZYU57BXTA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
          <div className={styles.mediaWrapperDesc}>
            <p>Детский клуб был основан в 2020 году. В настоящее время клуб продлжает развиваться, недавно спортсмены переехали в зал, который в два раза больше первого. В скором времени планируется его отремонтировать.</p>
            <p>Многих отпугивает слово "боевое" в названии единоборства. Но прежде всего, основной упор при подготовке спортсменов приходится на общую физическую подготовку. Ей уделяется час времени на разминке и немного в конце тренировки.</p>
            <p><span>Боевое самбо - это дисциплина, физическое развитие, а уже потом борьба.</span></p>
          </div>
        </div>
        <div className={styles.desc}>  
          <p>Самбо боевое - это вид спорта, который сочетает в себе элементы дзюдо, вольной борьбы и рукопашного боя. Обучение технике борьбы происходит на паркетной или матовой поверхности. В процессе обучения дети приобретают навыки самообороны.</p> 
          <p>Тренировки проходят следующим образом:</p>
          <ul>
            <li className={styles.descItem}>
              <p><span>ОФП</span> - общая физическая подготовка. Спортсмены выполняют физические упражнения, чтобы нагреть свой организм и улучшить координацию.</p>
            </li>
            <li className={styles.descItem}>
              <p><span>Техническая часть</span>. Спортсмены тренируются в выполнении различных приёмов борьбы, а также практикуют их сочетания.</p>
            </li>
            <li className={styles.descItem}>
              <p><span>Спарринги</span>. Спортсмены тренируются в схватках на вольной основе, практикуют выполнение различных приёмов и приемов борьбы в реальной ситуации.</p>
            </li>
            <li className={styles.descItem}>
              <p><span>Заключение</span>. Спортсмены выполняют упражнения для улучшения своей ловкости и координации.</p>
            </li>
          </ul>
          <table id='workout'>
            <thead>
              <tr>
                <th>День</th>
                <th>Время</th>
                <th>Программа</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>пн</th>
                <th>18:00 - 20:00</th>
                <th>ОФП, броски, спарринг, ОФП</th>
              </tr>
              <tr>
                <th>ср</th>
                <th>18:00 - 20:00</th>
                <th>ОФП, борьба, спарринг, ОФП</th>
              </tr>
              <tr>
                <th>пт</th>
                <th>18:00 - 20:00</th>
                <th>ОФП, стойка, спарринг, ОФП</th>
              </tr>
            </tbody>
          </table>
          {/* <Button
            type='button'
            size='sm'
            color='blue'
            title='Подробнее'
          /> */}
        </div>
      </div>
    </section>
  )
}
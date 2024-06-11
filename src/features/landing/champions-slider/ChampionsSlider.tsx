import './ChampionsSlider.css'
import ch1 from './../../../common/assets/img/champions/ch1.jpg'
import ch2 from './../../../common/assets/img/champions/ch2.jpg'
import ch3 from './../../../common/assets/img/champions/ch3.jpg'
import ch4 from './../../../common/assets/img/champions/ch4.jpg'
import ch5 from './../../../common/assets/img/champions/ch5.jpg'
import ch6 from './../../../common/assets/img/champions/ch6.jpg'
import ch7 from './../../../common/assets/img/champions/ch7.jpg'
import ch8 from './../../../common/assets/img/champions/ch8.jpg'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const ChampionsSlider = () => {
  const settings = {
    lazyload: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: false,
        }
      },
    ]
  }

  return (
    <section id='champions'>
      <div className={'sliderWrapper'}>
        <h2 className={'sliderHeader'}>Наши чемпионы</h2>
      </div>
      <div className={'slickWrapper'}>
        <Slider {...settings}>
          <div className={'slide'}>
            <img src={ch1} alt="champion" className={'slideImg'} />
            <h4>Зуева Полина Вадимовна</h4>
            <p>2013 г.р.</p>
            <p>1 место - Чемпионат 2024 г.</p>
            <p>2 место - Первенство 2020 г.</p>
            <p>1 место - Чемпионат 2019 г.</p>
          </div>
          <div className={'slide'}>
            <img src={ch2} alt="champion" className={'slideImg'} />
            <h4>Зуева Полина Вадимовна</h4>
            <p>2013 г.р.</p>
            <p>1 место - Чемпионат 2024 г.</p>
            <p>2 место - Первенство 2020 г.</p>
            <p>1 место - Чемпионат 2019 г.</p>
          </div>
          <div className={'slide'}>
            <img src={ch3} alt="champion" className={'slideImg'} />
            <h4>Зуева Полина Вадимовна</h4>
            <p>2013 г.р.</p>
            <p>1 место - Чемпионат 2024 г.</p>
            <p>2 место - Первенство 2020 г.</p>
            <p>1 место - Чемпионат 2019 г.</p>
          </div>
          <div className={'slide'}>
            <img src={ch4} alt="champion" className={'slideImg'} />
            <h4>Зуева Полина Вадимовна</h4>
            <p>2013 г.р.</p>
            <p>1 место - Чемпионат 2024 г.</p>
            <p>2 место - Первенство 2020 г.</p>
            <p>1 место - Чемпионат 2019 г.</p>
          </div>
          <div className={'slide'}>
            <img src={ch5} alt="champion" className={'slideImg'} />
            <h4>Зуева Полина Вадимовна</h4>
            <p>2013 г.р.</p>
            <p>1 место - Чемпионат 2024 г.</p>
            <p>2 место - Первенство 2020 г.</p>
            <p>1 место - Чемпионат 2019 г.</p>
          </div>
          <div className={'slide'}>
            <img src={ch6} alt="champion" className={'slideImg'} />
            <h4>Зуева Полина Вадимовна</h4>
            <p>2013 г.р.</p>
            <p>1 место - Чемпионат 2024 г.</p>
            <p>2 место - Первенство 2020 г.</p>
            <p>1 место - Чемпионат 2019 г.</p>
          </div>
          <div className={'slide'}>
            <img src={ch7} alt="champion" className={'slideImg'} />
            <h4>Зуева Полина Вадимовна</h4>
            <p>2013 г.р.</p>
            <p>1 место - Чемпионат 2024 г.</p>
            <p>2 место - Первенство 2020 г.</p>
            <p>1 место - Чемпионат 2019 г.</p>
          </div>
          <div className={'slide'}>
            <img src={ch8} alt="champion" className={'slideImg'} />
            <h4>Зуева Полина Вадимовна</h4>
            <p>2013 г.р.</p>
            <p>1 место - Чемпионат 2024 г.</p>
            <p>2 место - Первенство 2020 г.</p>
            <p>1 место - Чемпионат 2019 г.</p>
          </div>
        </Slider>
      </div>
    </section>
  )
}
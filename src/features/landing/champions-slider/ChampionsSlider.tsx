import './ChampionsSlider.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useAppSelector } from '../../../common/hooks/useAppSelector'
import { selectChampions } from './champions.selectors'
import { ChampionType, CompetitionType } from './champions.types'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setChampions } from './champions.slice'
import { appApi } from '../../../common/api/api'

export const ChampionsSlider = () => {
  const dispatch = useDispatch()
  const champions = useAppSelector(selectChampions)
  
  const settings = {
    initialSlide: 0,
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
          // initialSlide: 5,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
          translate: 0,
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

  useEffect(() => {
   appApi.getWinners()
      .then((res) => dispatch(setChampions(res)))
  }, [dispatch])

  return (
    <section id='champions'>
      <div className={'sliderWrapper'}>
        <h2 className={'sliderHeader'}>Наши чемпионы</h2>
      </div>
      <div className={'slickWrapper'}>
        <div className='slick-container'>
          <Slider {...settings}>
            {champions && champions.map((item: ChampionType) => {
              return (
                <div className='slide' key={item.id}>
                  <img src={item.photoPath} alt={item.name} className={'slideImg'} />
                  <h4>{item.name}</h4>
                  {/* <p>2013 г.р.</p> */}
                  <div className='competitionWrapper'>
                    {item.competitions.map((competition: CompetitionType) => {
                      return <p key={competition.id}>{competition.title}</p>
                    })}
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </section>
  )
}
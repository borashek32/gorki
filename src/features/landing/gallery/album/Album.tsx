import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../../../common/hooks/useAppSelector'
import styles from './Album.module.css'
import { selectAlbum, selectAlbumId } from './album.selectors'
import { useEffect } from 'react'
import { galleryApi } from '../../../../common/api/api'
import { setAlbum, setAlbumId } from './album.slice'
import { PhotoType } from './album.types'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'

export const Album = () => {
  const dispatch = useDispatch()
  const { id } = useParams()  
  const albumId = useAppSelector(selectAlbumId)
  const album = useAppSelector(selectAlbum)

  useEffect(() => {
    if (id) {
      dispatch(setAlbumId(Number(id)))
    }
  }, [dispatch, id])
  
  useEffect(() => {
    if (albumId) {
      galleryApi.getAlbum(albumId)
      .then(album => {
        dispatch(setAlbum(album))
      })  
    }
  }, [dispatch, albumId])

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <section className={styles.album}>
      {album &&
        <>
          <h2>{album.title}</h2>
          <Slider {...settings}>
            {album.photos.length !== 0 && album.photos.map((photo: PhotoType) => {
              return (
                <img key={photo.id} src={photo.path} alt={album.title + photo.id} />
              )
            })}
          </Slider>
        </> 
      }
    </section>
  )
}
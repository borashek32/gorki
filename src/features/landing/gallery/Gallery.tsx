import styles from './Gallery.module.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAlbums } from './gallery.slice'
import { useAppSelector } from '../../../common/hooks/useAppSelector'
import { selectAlbums } from './gallery.selectors'
import { GalleryType } from './gallery.types'
import { galleryApi } from '../../../common/api/api'
import { useNavigate } from 'react-router-dom'

export const Gallery = () => {
  const dispatch = useDispatch()
  const albums = useAppSelector(selectAlbums)
  const navigate = useNavigate()

  const getAlbum = (id: number) => {
    if (id) {
      navigate(`/albums/${id}`)
    }
  }
  
  useEffect(() => {
    galleryApi.getAlbums()
      .then(albums => {
        dispatch(getAlbums(albums))
      })  
  }, [dispatch])

  return (
    <section id='gallery' className={styles.gallery}>
      <h2 className={styles.galleryHeader}>Галерея</h2>
      <div className={styles.galleryGrid}>
        {albums && albums.map((item: GalleryType) => {
          return (
            <div className={styles.galleryGridItem} key={item.id} onClick={() => getAlbum(item.id)}>
              <img src={item.cover} alt={item.title} />
              <div className={styles.galleryItemDesc}>
                <h6>{item.title}</h6>
                <p>{item.date}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
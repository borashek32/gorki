import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../../../common/hooks/useAppSelector'
import styles from './Album.module.css'
import { selectAlbum, selectAlbumId } from './album.selectors'
import { useEffect, useState } from 'react'
import { appApi } from '../../../../common/api/api'
import { setAlbum, setAlbumId, setPhotoId } from './album.slice'
import { AlbumType, PhotoType } from './album.types'
import { useParams } from 'react-router-dom'
import { Modal } from '../../../../common/components/modal/Modal'

export const Album = () => {
  const dispatch = useDispatch()
  const { id } = useParams()  
  const albumId = useAppSelector(selectAlbumId)
  const album = useAppSelector(selectAlbum)
  const [isOpen, setIsOpen] = useState(false)

  const openPhotoModal = (photoId: number) => {
    setIsOpen(true)
    dispatch(setPhotoId(photoId))
  }

  const closePhotoModal = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (id) {
      dispatch(setAlbumId(Number(id)))
    }
  }, [dispatch, id])
  
  useEffect(() => {
    if (albumId) {
      appApi.getAlbum(albumId)
      .then((album: AlbumType) => {
        dispatch(setAlbum(album))
      })  
    }
  }, [dispatch, albumId])

  return (
    <>
      {isOpen && 
        <Modal closeModal={closePhotoModal} />
      }
      <section className={styles.album}>
        {album &&
          <>
            <h2>{album.title}</h2>
            <div className={styles.photosWrapper}>
              {album.photos.length !== 0 && album.photos.map((photo: PhotoType) => {
                return (
                  <div key={photo.id} className={styles.photoWrapper} onClick={() => openPhotoModal(photo.id)}>
                    <img src={photo.path} alt={album.title + photo.id} />
                  </div>
                )
              })}
            </div>
          </> 
        }
      </section>
    </>
  )
}
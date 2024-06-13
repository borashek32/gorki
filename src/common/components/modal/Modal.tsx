import styles from './Modal.module.css'
import { useAppSelector } from '../../hooks/useAppSelector'
import { selectAlbumId, selectAlbumTitile, selectPhoto, selectPhotoId } from '../../../features/landing/gallery/album/album.selectors'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setPhoto } from '../../../features/landing/gallery/album/album.slice'
import { appApi } from '../../api/api'

type Props = {
  closeModal: () => void
}

export const Modal = ({ 
  closeModal 
}: Props) => {
  const photoId = useAppSelector(selectPhotoId)
  const albumId = useAppSelector(selectAlbumId)
  const albumTitle = useAppSelector(selectAlbumTitile) 
  const photo = useAppSelector(selectPhoto)
  const dispatch = useDispatch()

  const photoStyles = photo?.horizontal ? styles.photoWrapperHorizontal : styles.photoWrapper

  useEffect(() => {
    if (albumId && photoId) {
      appApi.getPhoto(photoId, albumId)
        .then((res) => dispatch(setPhoto(res)))
    }
  }, [dispatch, photoId])

   return (
    <div className={styles.modalWrapper}>
      <div className={styles.closeModal} onClick={closeModal}>
        <span></span>
      </div>
      <div className={photoStyles}>
        {photo && albumTitle && <img src={photo.path} alt={albumTitle + photo.id} />}
      </div>
    </div>
   )
}
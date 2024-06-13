import { RootState } from "../../../../common/providers/model/store"

const selectAlbum = (state: RootState) => state.album.album
const selectAlbumTitile = (state: RootState) => state.album.album?.title
const selectAlbumId = (state: RootState) => state.album.albumId
const selectPhotoId = (state: RootState) => state.album.photoId
const selectPhoto = (state: RootState) => state.album.photo

export {
  selectAlbum,
  selectAlbumId,
  selectPhotoId,
  selectAlbumTitile,
  selectPhoto,
}
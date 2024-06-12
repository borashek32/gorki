import { RootState } from "../../../../common/providers/model/store"

const selectAlbum = (state: RootState) => state.album.album
const selectAlbumId = (state: RootState) => state.album.albumId

export {
  selectAlbum,
  selectAlbumId,
}
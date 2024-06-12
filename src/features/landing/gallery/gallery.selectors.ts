import { RootState } from "../../../common/providers/model/store"

const selectAlbums = (state: RootState) => state.gallery.albums

export {
  selectAlbums,
}
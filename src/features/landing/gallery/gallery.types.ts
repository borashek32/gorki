import { AlbumType } from "./album/album.types"

export type GalleryType = {
  id: number
  title: string
  cover: string 
  date: string
  albums: AlbumType[]
}

export type GalleryAlbumType = Pick<GalleryType, 'id' | 'title' | 'cover' | 'date'>
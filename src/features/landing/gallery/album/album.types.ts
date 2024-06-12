export type AlbumType = {
  id: number
  title: string
  date: string
  photos: PhotoType[]
}

export type PhotoType = {
  id: number
  path: string
}
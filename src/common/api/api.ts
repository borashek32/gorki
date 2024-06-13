import { ChampionType } from '../../features/landing/champions-slider/champions.types'
import { AlbumType, PhotoType } from '../../features/landing/gallery/album/album.types'
import { GalleryAlbumType } from './../../features/landing/gallery/gallery.types'
import { data } from './data'

export const appApi = {
  getAlbums() {
    return new Promise<GalleryAlbumType[]>(resolve => {
      resolve(data.galleryAlbums)
    })
  },
  getAlbum(id: number) {
    return new Promise<AlbumType>(resolve => {data.albums.find(album => {
        if (album.id === id) {
          resolve(album)
        }
      })
    })
  },
  getPhoto(photoId: number, albumId: number): Promise<PhotoType> {
    return new Promise((resolve, reject) => {
      data.albums
        .filter(album => album.id === albumId)
        .forEach(album => {
          const photo = album.photos.find(photo => photo.id === photoId);
          if (photo) {
            resolve(photo);
          } else {
            reject(new Error(`Photo not found: ${photoId}`));
          }
        });
    });
  },
  getWinners() {
    return new Promise<ChampionType[]>(resolve => {
      resolve(data.champions)
    })
  },
}
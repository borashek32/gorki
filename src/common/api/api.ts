import { GalleryType } from './../../features/landing/gallery/gallery.types'
import { AlbumType } from '../../features/landing/gallery/album/album.types'

import photo1 from './../assets/img/gallery/workout/1.jpeg'
import photo2 from './../assets/img/gallery/workout/2.jpeg'
import photo3 from './../assets/img/gallery/workout/3.jpeg'
import photo4 from './../assets/img/gallery/workout/4.jpeg'
import photo5 from './../assets/img/gallery/workout/5.jpeg'
import photo6 from './../assets/img/gallery/workout/6.jpeg'
import photo7 from './../assets/img/gallery/workout/7.jpeg'
import photo8 from './../assets/img/gallery/workout/8.jpeg'
import photo9 from './../assets/img/gallery/workout/9.jpeg'
import photo10 from './../assets/img/gallery/workout/10.jpg'
import photo11 from './../assets/img/gallery/workout/11.jpg'
import photo12 from './../assets/img/gallery/workout/12.jpg'
import photo13 from './../assets/img/gallery/workout/13.jpg'
import photo14 from './../assets/img/gallery/workout/14.jpg'
import photo15 from './../assets/img/gallery/workout/15.jpg'
import photo16 from './../assets/img/gallery/workout/16.jpeg'

import winner1 from './../assets/img/gallery/winners/1.jpeg'
import winner2 from './../assets/img/gallery/winners/2.jpeg'
import winner3 from './../assets/img/gallery/winners/3.jpg'
import winner4 from './../assets/img/gallery/winners/4.jpeg'
import winner5 from './../assets/img/gallery/winners/5.jpg'


export const galleryApi = {
  getAlbums() {
    return new Promise<GalleryType[]>(resolve => {
      const albums = [
        { id: 1, title: 'Тренировки', cover: photo1, date: '12.06.2024' },
        { id: 2, title: 'Победители', cover: winner1, date: '12.06.2024' },
      ]
      resolve(albums)
    })
  },
  getAlbum(id: number) {
    return new Promise<AlbumType>(resolve => {
      let album
      if (id === 1) {
        album = {
          id: 1,
          title: 'Тренировки',
          date: '12.06.2024',
          photos: [
            {
              id: 1,
              path: photo1,
            },
            {
              id: 2,
              path: photo2,
            },
            {
              id: 3,
              path: photo3,
            },
            {
              id: 4,
              path: photo4,
            },
            {
              id: 5,
              path: photo5,
            },
            {
              id: 6,
              path: photo6,
            },
            {
              id: 7,
              path: photo7,
            },
            {
              id: 8,
              path: photo8,
            },
            {
              id: 9,
              path: photo9,
            },
            {
              id: 10,
              path: photo10,
            },
            {
              id: 11,
              path: photo11,
            },
            {
              id: 12,
              path: photo12,
            },
            {
              id: 13,
              path: photo13,
            },
            {
              id: 14,
              path: photo14,
            },
            {
              id: 15,
              path: photo15,
            },
            {
              id: 16,
              path: photo16,
            },
          ]
        }
      } else if (id === 2) {
        album = {
          id: 1,
          title: 'Тренировки',
          date: '12.06.2024',
          photos: [
            {
              id: 1,
              path: winner1,
            },
            {
              id: 2,
              path: winner2,
            },
            {
              id: 3,
              path: winner3,
            },
            {
              id: 4,
              path: winner4,
            },
            {
              id: 5,
              path: winner5,
            }
          ]
        }
      } else {
        throw new Error(`Album with id ${id} not found`)
      }  
      resolve(album)
    })
  }
}
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AlbumType, PhotoType } from './album.types'

export interface AlbumState {
  album: AlbumType | null
  albumId: number | null
  photoId: number | null
  photo: PhotoType | null
}

const initialState: AlbumState = {
  album: null,
  albumId: null,
  photoId: null,
  photo: null,
}

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    setAlbumId(state, action: PayloadAction<number>) {
      console.log(action.payload);
      
      state.albumId = action.payload
    },
    setAlbum(state, action: PayloadAction<AlbumType>) {
      state.album = action.payload
    },
    setPhotoId(state, action: PayloadAction<number>) {
      state.photoId = action.payload
    },
    setPhoto(state, action: PayloadAction<PhotoType>) {
      state.photo = action.payload
    }
  },
})

export const { 
  setAlbumId,
  setAlbum,
  setPhotoId,
  setPhoto,
} = albumSlice.actions

export const albumReducer = albumSlice.reducer
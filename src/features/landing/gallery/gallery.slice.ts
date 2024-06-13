import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { GalleryAlbumType } from './gallery.types'

export interface GalleryState {
  albums: GalleryAlbumType[]
}

const initialState: GalleryState = {
  albums: [],
}

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    getAlbums(state, action: PayloadAction<GalleryAlbumType[]>) {
      state.albums = action.payload
    }
  },
})

export const { getAlbums } = gallerySlice.actions
export const galleryReducer = gallerySlice.reducer
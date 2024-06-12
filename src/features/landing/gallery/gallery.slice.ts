import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { GalleryType } from './gallery.types'

export interface GalleryState {
  albums: GalleryType[]
}

const initialState: GalleryState = {
  albums: [],
}

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    getAlbums(state, action: PayloadAction<GalleryType[]>) {
      state.albums = action.payload
    }
  },
})

export const { getAlbums } = gallerySlice.actions
export const galleryReducer = gallerySlice.reducer
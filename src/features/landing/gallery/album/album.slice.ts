import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AlbumType } from './album.types'

export interface AlbumState {
  album: AlbumType | null
  albumId: number | null
}

const initialState: AlbumState = {
  album: null,
  albumId: null,
}

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    setAlbumId(state, action: PayloadAction<number>) {
      state.albumId = action.payload
    },
    setAlbum(state, action: PayloadAction<AlbumType>) {
      state.album = action.payload
    }
  },
})

export const { 
  setAlbumId,
  setAlbum,
} = albumSlice.actions

export const albumReducer = albumSlice.reducer
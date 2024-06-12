import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { galleryReducer } from '../../../features/landing/gallery/gallery.slice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { albumReducer } from '../../../features/landing/gallery/album/album.slice'

export const store = configureStore({
  reducer: {
    gallery: galleryReducer,
    album: albumReducer,
  },
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
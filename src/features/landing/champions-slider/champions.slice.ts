import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ChampionType } from './champions.types'

export interface ChampionsState {
  champions: ChampionType[]
}

const initialState: ChampionsState = {
  champions: [],
}

export const championsSlice = createSlice({
  name: 'champions',
  initialState,
  reducers: {
    setChampions(state, action: PayloadAction<ChampionType[]>) {
      state.champions = action.payload
    }
  },
})

export const { setChampions } = championsSlice.actions
export const championsReducer = championsSlice.reducer
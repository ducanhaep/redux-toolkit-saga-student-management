import { createSlice } from "@reduxjs/toolkit";
import { City } from "models";

export interface CityState = {
  list: Array<City>
}

const initialState: CityState = {
  list: []
}
const citySlice  = createSlice({
  name: 'city',
  initialState,
  reducers: {

  }
})

// Actions
export const cityActions = citySlice.actions
// Selector

// Reducer
const cityReducer = citySlice.reducer
export default cityReducer
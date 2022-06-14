import { createSlice } from "@reduxjs/toolkit";
import { City } from "models";

export interface CityState {
  loading: boolean;
  list: Array<City>;
}

const initialState: CityState = {
  loading: false,
  list: [],
};
const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    fetchCityList(state, action) {},
    fetchCityListSuccess(state, action) {},
    fetchCityListFailed(state, action) {},
    fetchCityList(state, action) {},
  },
});

// Actions
export const cityActions = citySlice.actions;
// Selector

// Reducer
const cityReducer = citySlice.reducer;
export default cityReducer;

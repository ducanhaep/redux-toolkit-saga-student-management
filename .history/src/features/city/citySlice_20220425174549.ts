import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { City, ListResponse } from "models";

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
    fetchCityList(state, action) {
      state.loading = true;
    },
    fetchCityListSuccess(state, action: PayloadAction<ListResponse<City>>) {
      state.loading = false;
      state.list = action.payload.data;
    },
    fetchCityListFailed(state, action) {
      state.loading = false;
    },
  },
});

// Actions
export const cityActions = citySlice.actions;

// Selector
export const selectCityList = (state: RootState) => state.city.list;

// Reducer
const cityReducer = citySlice.reducer;
export default cityReducer;

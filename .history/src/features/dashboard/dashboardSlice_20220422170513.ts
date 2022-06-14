import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Student } from "models";

export interface DashboardStatistics {
  maleCount: number;
  femaleCount: number;
  highMarkCount: number;
  lowMarkCount: number;
}
export interface RankingByCity {
  cityId: string;
  rankingList: Student[];
}
export interface DashboardState {
  loading: boolean;
  statistics: DashboardStatistics;
  highestStudentList: Student[];
  lowStudentList: Student[];
  rankingByCityList: RankingByCity[];
}

const initialState: DashboardState = {
  loading: false,
  statistics: {
    maleCount: 0,
    femaleCount: 0,
    highMarkCount: 0,
    lowMarkCount: 0,
  },
  highestStudentList: [],
  lowStudentList: [],
  rankingByCityList: [],
};
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    fetchData(state) {
      state.loading = true;
    },
    fetchDataSuccess(state) {
      state.loading = false;
    },
    fetchDataFail(state) {
      state.loading = true;
    },

    setStatistic(state, action: PayloadAction<DashboardStatistics>) {
      state.statistics = action.payload;
    },
    setHighestStudentList(state, action: PayloadAction<Student[]>) {
      state.highestStudentList = action.payload;
    },
    setLowStudentList(state, action: PayloadAction<Student[]>) {
      state.lowStudentList = action.payload;
    },
    setRankingsByCityList(state, action: PayloadAction<RankingByCity[]>) {
      state.rankingByCityList = action.payload;
    },
  },
});

// Actions
export const dashboardActions = dashboardSlice.actions;

// Selector
const selectDashboardStatistic;

// Reducer
const dashboardReducer = dashboardSlice.reducer;
export default dashboardReducer;

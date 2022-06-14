import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Student } from "models";

export interface DashboardStatistics {
  maleCount: number;
  femaleCount: number;
  highMarkCount: number;
  lowMarkCount: number;
}
export interface RankingByCity {
  cityId: string;
  cityName: string;
  rankingList: Student[];
}
export interface DashboardState {
  loading: boolean;
  statistics: DashboardStatistics;
  highestStudentList: Student[];
  lowestStudentList: Student[];
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
  lowestStudentList: [],
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
      state.lowestStudentList = action.payload;
    },
    setRankingsByCityList(state, action: PayloadAction<RankingByCity[]>) {
      state.rankingByCityList = action.payload;
    },
  },
});

// Actions
export const dashboardActions = dashboardSlice.actions;

// Selector
export const selectDashboardStatistic = (state: RootState) => state.dashboard.statistics;
export const selectDashboardLoading = (state: RootState) => state.dashboard.loading;
export const selectHighStudentList = (state: RootState) => state.dashboard.highestStudentList;
export const selectLowStudentList = (state: RootState) => state.dashboard.lowestStudentList;
export const selectRankingsByCityList = (state: RootState) => state.dashboard.rankingByCityList;

// Reducer
const dashboardReducer = dashboardSlice.reducer;
export default dashboardReducer;

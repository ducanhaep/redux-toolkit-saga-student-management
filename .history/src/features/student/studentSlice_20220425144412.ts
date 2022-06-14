import { createSlice } from "@reduxjs/toolkit";
import { ListParams, PaginationParams, Student } from "models";
export interface StudentState {
  loading: boolean;
  list?: Array<Student>;
  filter?: ListParams;
  pagination?: PaginationParams;
}
const initialState: StudentState = {
  loading: false,
  list: [],
  filter: {
    _page: 1,
    _limit: 15,
  },
  pagination: {
    _page: 1,
    _limit: 15,
    _totalRows: 15,
  },
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    fetchStudentList(state, action) {},
    fetchStudentListSuccess(state, action) {},
    fetchStudentListFailed(state, action) {},

    setFilter(state, action) {},
  },
});

// Actions
export const studentActions = studentSlice.actions;

// Selector

// Reducer
const studentReducer = studentSlice.reducer;
export default studentReducer;

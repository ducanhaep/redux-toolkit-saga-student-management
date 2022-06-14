import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListParams, ListResponse, PaginationParams, Student } from "models";
import { string } from "yup";
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
    fetchStudentList(state, action: PayloadAction<ListParams>) {
      state.loading = true;
    },
    fetchStudentListSuccess(state, action: PayloadAction<ListResponse<Student>>) {
      state.list = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    fetchStudentListFailed(state, action: PayloadAction<string>) {
      state.loading = false;
    },

    setFilter(state, action) {},
  },
});

// Actions
export const studentActions = studentSlice.actions;

// Selector

// Reducer
const studentReducer = studentSlice.reducer;
export default studentReducer;

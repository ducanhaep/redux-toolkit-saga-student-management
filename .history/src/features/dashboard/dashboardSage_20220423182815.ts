import studentApi from "api/studentApi";
import { ListResponse, Student } from "models";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { dashboardActions } from "./dashboardSlice";

function* fetchStatistic() {}
function* fetchHighestStudentList() {
  const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
    _page: 1,
    _limit: 5,
    _sort: "mark",
    _order: "desc",
  });

  yield put(dashboardActions.setHighestStudentList(data));
}
function* fetchLowestStudentList() {
  const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
    _page: 1,
    _limit: 5,
    _sort: "mark",
    _order: "asc",
  });
  yield put(dashboardActions.setLowStudentList(data));
}
function* fetchRankingByCityList() {}
function* fetchDashboardData() {
  try {
    yield all([
      call(fetchStatistic),
      call(fetchHighestStudentList),
      call(fetchLowestStudentList),
      call(fetchRankingByCityList),
    ]);
  } catch (error) {
    console.log("Failed to fetch dashboard data", error);
  }
}
export default function* dashboardSaga() {
  yield takeLatest(dashboardActions.fetchData.type, fetchDashboardData);
}

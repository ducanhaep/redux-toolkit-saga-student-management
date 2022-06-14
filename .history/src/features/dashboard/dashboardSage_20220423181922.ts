import { all, call, takeLatest } from "redux-saga/effects";
import { dashboardActions } from "./dashboardSlice";

function* fetchStatistic() {}
function* fetchHighestStudentList() {}
function* fetchLowestStudentList() {}
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

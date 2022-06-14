import { takeLatest } from "redux-saga/effects";
import { dashboardActions } from "./dashboardSlice";

function* fetchDashboardData() {}
export default function* dashboardSaga() {
  yield takeLatest(dashboardActions.fetchData.type, fetchDashboardData);
}

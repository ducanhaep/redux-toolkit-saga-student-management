import { takeLatest } from "redux-saga/effects";
import { studentActions } from "./studentSlice";

function* fetchStudentList() {}

export default function* studentSaga() {
  // watch fetch student action
  yield takeLatest(studentActions.fetchStudentList, fetchStudentList);
}

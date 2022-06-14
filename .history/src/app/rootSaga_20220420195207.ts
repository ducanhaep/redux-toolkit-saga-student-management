import { all } from "redux-saga/effects";

function* helloSaga() {
  console.log("helloSaga");
}
export default function* rootSaga() {
  console.log("root saga");
}

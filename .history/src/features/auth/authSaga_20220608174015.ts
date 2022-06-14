import { PayloadAction } from "@reduxjs/toolkit";
import { push } from "connected-react-router";
import { take, fork, call, delay, put } from "redux-saga/effects";
import { login, loginFailed, LoginPayload, loginSuccess, logout } from "./authSlice";

function* handleLogin(payload: LoginPayload) {
  try {
    //call api
    yield delay(1000);
    localStorage.setItem("access_token", "fake_token");
    yield put(
      loginSuccess({
        id: 1,
        name: "Duc Anh",
      })
    );
    // Redirect to admin page
    yield put(push("/admin/dashboard"));
  } catch (error) {
    if (error instanceof Error) {
      yield put(loginFailed(error.message));
    }
  }
}
function* handleLogout() {
  yield delay(500);
  localStorage.removeItem("access_token");

  // Redirect to login page
  yield put(push("/login"));
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = !!localStorage.getItem("access_token");
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(login.type);
      yield fork(handleLogin, action.payload);
    }
    yield take(logout.type);

    // use call instead of fork to waiting for remove access token
    yield call(handleLogout);
  }
}
export default function* authSaga() {
  yield fork(watchLoginFlow);
}

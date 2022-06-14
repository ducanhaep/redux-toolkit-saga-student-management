import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import authReducer from "features/auth/authSlice";

import createSagaMiddleware from "redux-saga";
import { history } from "ultis";
import rootSaga from "./rootSaga";

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
});

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

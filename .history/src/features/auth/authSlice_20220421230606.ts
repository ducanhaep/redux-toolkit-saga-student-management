import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "models";

export interface LoginPayload {
  username: string;
  password: string;
}
export interface AuthState {
  isLoggedIn: boolean;
  isLogging?: boolean;
  currentUser?: User;
}
const initialState: AuthState = {
  isLoggedIn: false,
  isLogging: false,
  currentUser: undefined,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.logging = false;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});

// Actions
export const { login, loginSuccess, loginFailed, logout } = authSlice.actions;

// Selector
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.isLogging;
//Reducer
const authReducer = authSlice.reducer;
export default authReducer;

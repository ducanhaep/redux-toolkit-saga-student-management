import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "models";

export interface LoginPayload {
  username: string;
  password: string;
}
export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User;
}
const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
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
      state.logging = false;
      state.currentUser = action.payload;
    },
    loginFailed(state) {
      state.logging = false;
    },

    logout(state) {},
  },
});

export const { login, loginSuccess, loginFailed, logout } = authSlice.actions;

export default authSlice.reducer;

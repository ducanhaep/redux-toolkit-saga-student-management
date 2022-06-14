import { createSlice } from "@reduxjs/toolkit";
import { User } from "models";
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
  initialState: "",
  reducers: {
    login: (state, action) => {},
  },
});

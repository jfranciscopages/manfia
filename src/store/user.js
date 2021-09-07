import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const sendLoginRequest = createAsyncThunk("LOGIN", () => {
  return axios.post("/api/login").then((r) => r.data);
});

const initialState = {
  currentUser: null,
};

const userReducer = createReducer(initialState, {
  [sendLoginRequest.fulfilled]: (state, action) => action.payload,
});

export default userReducer;

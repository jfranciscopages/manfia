import axios from "axios";
import {
  createAsyncThunk,
  createReducer,
  createAction,
} from "@reduxjs/toolkit";

export const searchProducts = createAsyncThunk("SEARCH_PRODUCTS", (title) =>
  axios
    .get(`api/search/${title}`)
    .then((res) => res.data)
    .catch((e) => console.log(e))
);

const initialValue = [];

export const searchReducer = createReducer(initialValue, {
  [searchProducts.fulfilled]: (state, action) => action.payload,
});

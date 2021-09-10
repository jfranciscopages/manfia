import axios from "axios";
import {
  createAsyncThunk,
  createReducer,
  createAction,
} from "@reduxjs/toolkit";

export const searchProducts = createAsyncThunk("SEARCH_PRODUCTS", (title) =>
  axios
    .get(`https://fakestoreapi.com/products/${title}`)
    .then((res) => res.data)
    .catch((e) => console.log(e))
);

export const showProducts = createAction("SHOW_PRODUCTS");

const initialValue = [];

const searchReducer = createReducer(initialValue, {
  [searchProducts.fulfilled]: (state, action) => action.payload,
  [showProducts]: (state, action) => action.payload,
});

export default searchReducer;
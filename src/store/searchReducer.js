import axios from "axios";
import {
  createAsyncThunk,
  createReducer,
  createAction,
} from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("GETPRODUCTS", (title) =>
  axios
    .get(`https://fakestoreapi.com/products/${title}`)
    .then((res) => res.data)
    .catch((e) => console.log(e))
);

export const setProducts = createAction("SET_PRODUCTS");

const initialValue = [];

const searchReducer = createReducer(initialValue, {
  [getProducts.fulfilled]: (state, action) => action.payload,
  [setProducts]: (state, action) => action.payload,
});

export default searchReducer;
import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const addToCart = createAsyncThunk("ADD_TO_CART", () => {
  return axios.post("/api/products/:id/add").then((r) => r.data); //VER RUTA
});

const initialState = [];

const cartReducer = createReducer(initialState, {
  [addToCart.fulfilled]: (state, action) => action.payload,
});

export default cartReducer;

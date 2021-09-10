import axios from "axios";
import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
};

//GET todos los productos del carrito
export const GetAllProduct = createAsyncThunk("GET_ALL_PRODUCTS", () => {
  return axios
    .get(`/api/carrito/:id`)
    .then((response) =>
      response.data ? response.data : console.log("no hay productos")
    ); //VER RUTA
});

// cartReducer
export const cartReducer = createReducer(initialState.products, {
  [GetAllProduct.fulfilled]: (state, action) => action.payload,
});

//AGREGAR un producto al carrito
  export const AddCart = createAction("ADD_TO_CART", (productId) => {
    initialState.quantity++
    return [ ...initialState.products, productId ]
  });

//QUITAR un producto al carrito
  export const DeleteCart = createAction("DELETE_FROM_CART", (productId) => {
    let index = initialState.products.indexOf(productId);
    initialState.products.splice(index, 1);
  });

 //SUMAR 1 a un producto ya existente en el carrito
  export const IncreaseQuantity = createAction("INCREASE_QUANTITY", () => {
    initialState.quantity++
  });

 //RESTAR 1 a un producto ya existente en el carrito
  export const DecreaseQuantity = createAction("DECREASE_QUANTITY", (productId) => {
   let i = initialState.products.indexOf(productId)
    initialState.products.includes(productId) && initialState.quantity>1? initialState.quantity-- : initialState.products.splice(i, 1)
});

 //RESTAR 1 a un producto ya existente en el carrito
 export const onCheckoutClicked = createAction("CHECKOUT", () => {
 
});

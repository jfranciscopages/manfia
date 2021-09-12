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
    .get(`/api/carrito/:id`) //VER RUTA
    .then((response) =>
      response.data ? response.data : console.log("no hay productos")
    );
});

// cartReducer
export const cartReducer = createReducer(initialState.products, {
  [GetAllProduct.fulfilled]: (state, action) => action.payload,
});

// //AGREGAR un producto al carrito  --> guardarlo en la BD
export const AddCart = createAction("ADD_TO_CART", (productId) => {
//   axios.get(`api/products/:id`).then((response) => {
//     let stockProduct = response.data.stock; //VER BIEN QUE LLEGA EN RESPONSE
//     axios
//       .put(`api/products/:id`)
//       .then(() => {
//         console.log("guardado en la BD");
//         initialState.quantity++;
//         return [...initialState.products, productId];
//       })
//       .then(() => {
//         axios
//         .put(`api/product`, { stock: stockProduct - 1 })
//         .then((data) => {
//           [...initialState.products, productId];
//         });
//       });
//   });
}
);

// //QUITAR un producto al carrito
export const DeleteCart = createAction("DELETE_FROM_CART", (productId) => {
  // axios.delete(`api/products/:id/:products`).then(() => {
  //   console.log("eliminado en la BD");
  //   initialState.quantity = 0;
  //   let index = initialState.products.indexOf(productId);
  //   initialState.products.splice(index, 1);
  // });
});

// //SUMAR 1 a un producto ya existente en el carrito --> guardar en la BD pero en vista solo
export const IncreaseQuantity = createAction("INCREASE_QUANTITY", () => {
  // axios.get(`api/products/:id`).then((response) => {
  //   let stockProduct = response.data.stock; //VER BIEN QUE LLEGA EN RESPONSE
  //   if (stockProduct > 0) {
  //     axios
  //       .put(`api/products/:id`, { cuantity: cuantity + 1 }) //REVISAR LOGICA Â¿hacer otro get?
  //       .then(
  //         axios.put(`api/product`, { stock: stockProduct - 1 }).then((data) => {
  //           initialState.quantity++;
  //           [...initialState.products, productId];
  //         })
  //       ); //devuelve algo?
  //   } else alert("No hay suficiente stock");
  });
// });

// //RESTAR 1 a un producto ya existente en el carrito
export const DecreaseQuantity = createAction(
  // "DECREASE_QUANTITY",
  // (productId) => {
  //   let i = initialState.products.indexOf(productId);
  //   initialState.products.includes(productId) && initialState.quantity > 1
  //     ? initialState.quantity--
  //     : initialState.products.splice(i, 1);
  // }
);

// //RESTAR 1 a un producto ya existente en el carrito
// export const onCheckoutClicked = createAction("CHECKOUT", () => {});
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { cartReducer } from "./cart";
import { productReducer } from "./productReducer";
import { productsReducer } from "./productsReducer";
import { userLoggedReducer } from "./userLogged";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userLoggedReducer,
    cart: cartReducer,
    products: productsReducer,
    product: productReducer
  },
});

export default store;

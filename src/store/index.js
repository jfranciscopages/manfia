import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";
import { productsReducer } from "./productsReducer";
import { userLoggedReducer } from "./userLogged";
import { orderReducer } from "./orderReducer";

const store = configureStore({
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userLoggedReducer,
    cart: cartReducer,
    order: orderReducer,
    products: productsReducer,
    product: productReducer,
  },
});

export default store;

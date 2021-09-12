import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { cartReducer } from "./cartReducer";
import { productsReducer } from "./productsReducer";
import { userLoggedReducer } from "./userLogged";
import { orderReducer } from "./orderReducer";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userLoggedReducer,
    cart: cartReducer,
    order: orderReducer,
    products: productsReducer,
  },
});

export default store;

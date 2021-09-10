import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import {cartReducer} from "./cart";
import { userLoggedReducer } from "./userLogged";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userLoggedReducer,
    cart: cartReducer,
  },
});

export default store;

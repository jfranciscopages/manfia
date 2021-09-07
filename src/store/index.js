import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import cartReducer from "./cart";
import userReducer from "./user";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    cart: cartReducer
  },
});

export default store;
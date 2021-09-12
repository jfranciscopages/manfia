import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

<<<<<<< HEAD
import { cartReducer } from "./cartReducer";
=======
import { cartReducer } from "./cart";
import { productReducer } from "./productReducer";
>>>>>>> 0646cec2e327a93cae32125781734b6da8395e79
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
    product: productReducer
  },
});

export default store;

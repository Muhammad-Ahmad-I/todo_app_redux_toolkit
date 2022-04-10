import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productsSlice from "./productsSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsSlice,
  },
});
export default store;

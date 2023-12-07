import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productSlice/reducer";

export const store = configureStore({
  reducer: { products: productsReducer },
});

import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
})
export type AppDispatch = typeof store.dispatch // for dispatch
export type RootState = ReturnType<typeof store.getState> //for selector
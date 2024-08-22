import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import FoodArray, { type FoodArray as CartItem } from "../../../FoodList";
// export type CartItem = {
//   id: number;
//   title: string;
//   price: number;
// };
type CartState = {
  items: {
    image: string;
    star: number;
    title: string;
    description: string;
    id: number;
    price: number;
    quantity: number;
  }[];
  total: number;
};
const initialState: CartState = {
  items: [],
  total: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{ id: number }>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        //now we shold add item to cart by finding it
        const findItem = () => {
          for (let i = 0; i < FoodArray.length; i++) {
            if (FoodArray[i].id === action.payload.id) {
              return FoodArray[i];
            }
          }
        };
        const findedItem: CartItem = findItem()!;
        const incressItem = {
          ...findedItem,
          quantity: 1,
        };
        state.items.push(incressItem);
      }
      if (itemIndex >= 0) {
        const newQuantity = state.items[itemIndex].quantity + 1;
        state.items[itemIndex] = {
          ...state.items[itemIndex],
          quantity: newQuantity,
        };
      }
    },
    removeFromCart(state, action: PayloadAction<{ id: number }>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const item = state.items[itemIndex];
      // if (itemIndex >= 0) {
      //   const findItem = () => {
      //     for (let i = 0; i < state.items.length; i++) {
      //       if (state.items[i].id === action.payload.id) {
      //         return state.items[i];
      //       }
      //     }
      //   };
      // const findedStateItem: CartItem = findItem()!;
      // const decressItem = findedItem
      if (item.quantity > 1) {
        const newQuantity = state.items[itemIndex].quantity - 1;
        state.items[itemIndex] = {
          ...state.items[itemIndex],
          quantity: newQuantity,
        };
          
        
      } else {
        const newState = state.items.filter(item => item.id !== action.payload.id)
        state.items = [...newState];
         
        
      }
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;

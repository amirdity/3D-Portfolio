import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import FoodArray, {type FoodArray as CartItem } from "../../../FoodList";
// export type CartItem = {
//   id: number;
//   title: string;
//   price: number;
// };
type CartState = {
  items: CartItem[];
};
const initialState: CartState = {
  items: [],
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
        state.items.push(findItem()!);
        // state.items.push({
        //   id: action.payload.id,
        //   title: "Unknown Item",
        //   price: 0,
        // });
        console.log(state.items)
      }
    },
  },
});
export const { addToCart } = cartSlice.actions;

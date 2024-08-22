import React from "react";

interface Item {
  id: string;
  name: string;
  amount: number;
  price: number;
}

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item: Item) => {},

  removeItem: (id: string) => {},
});

export default CartContext;

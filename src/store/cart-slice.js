import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalItems: 0,
  totalAmount: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItem(state, action){
      const newItem = action.payload;
      const currentItem = state.items.find(item => newItem.id === item.id);

      if (currentItem){
        currentItem.quantity++;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          quantity: 1,
          price: newItem.price,
        });
      }
    },

    removeItem(state, action){
      const id = action.payload;
      const currentItem = state.items.find(item => id === item.id);

      if (currentItem.quantity === 1) {
        state.items = state.items.filter(item => id !== item.id);
      } else {
        currentItem.quantity--;
      }
    }
  }
})

export const cartActions = cartSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ id: action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.findIndex(i => i.id === action.payload);
      if (itemIndex > -1) {
        state[itemIndex].quantity -= 1;
        if (state[itemIndex].quantity <= 0) {
          state.splice(itemIndex, 1); // ta bort helt
        }
      }
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

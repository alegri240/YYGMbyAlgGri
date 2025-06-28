import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: ""
};

const orderReducer = createSlice({
  name: "order",
  initialState,
  reducers: {
    updateOrder(state, action) {
      console.log("Current state: ", state);
      console.log("Action: ", action);
      state.value = action.payload;
    },
    resetOrder(state) {
      state.value = "";
    },
  },
});

export const { updateOrder, resetOrder } = orderReducer.actions;
export default orderReducer.reducer;
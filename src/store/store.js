import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartReducer';
import orderReducer from '../reducers/orderReducer';
import { apiSlice } from '../api/apiSlice'; 

const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer, 
    [apiSlice.reducerPath]: apiSlice.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), 
});

export default store;

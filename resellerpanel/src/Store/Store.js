
import { configureStore } from '@reduxjs/toolkit';
import ResellerReducer from './ResellerSlice';     
import cartReducer from './CartSlice';

export const store = configureStore({
  reducer: {
    reseller: ResellerReducer,
    cart: cartReducer,
  },
});
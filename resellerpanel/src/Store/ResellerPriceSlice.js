
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  prices: {} 
};

const resellerPriceSlice = createSlice({
  name: 'resellerPrice',
  initialState,
  reducers: {
    setCoursePrice: (state, action) => {
      const { courseId, price } = action.payload;
      state.prices[courseId] = price;
      
      localStorage.setItem('reseller_prices', JSON.stringify(state.prices));
    },
    loadPricesFromStorage: (state) => {
      const saved = localStorage.getItem('reseller_prices');
      if (saved) {
        state.prices = JSON.parse(saved);
      }
    }
  }
});

export const { setCoursePrice, loadPricesFromStorage } = resellerPriceSlice.actions;
export default resellerPriceSlice.reducer;
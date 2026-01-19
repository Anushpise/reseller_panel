import { configureStore } from '@reduxjs/toolkit';
import ResellerReducer from './ResellerSlice';
import BrandingReducer from './Brandingslice';   

const loadState = () => {
  try {
    const savedPrices = localStorage.getItem('reseller_prices');
    const savedBranding = localStorage.getItem('reseller_branding');

    return {
      reseller: {
        prices: savedPrices ? JSON.parse(savedPrices) : undefined,
      },
      branding: {
        data: savedBranding ? JSON.parse(savedBranding) : null,
        loading: false,
      }
    };
  } catch (err) {
    console.error("Could not load state from localStorage", err);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    if (state.reseller?.prices) {
      localStorage.setItem('reseller_prices', JSON.stringify(state.reseller.prices));
    }

    if (state.branding?.data) {
      localStorage.setItem('reseller_branding', JSON.stringify(state.branding.data));
    }
  } catch (err) {
    console.error("Could not save state to localStorage", err);
  }
};

const preloadedState = loadState();


export const store = configureStore({
  reducer: {
    reseller: ResellerReducer,
    branding: BrandingReducer,  
  },
  preloadedState,
});


store.subscribe(() => {
  saveState(store.getState());
});

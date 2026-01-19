import { createSlice } from "@reduxjs/toolkit";

const resellerSlice = createSlice({
  name: "reseller",
  initialState: {
    reseller: null,
    subscriptionActive: false,
    subscription: null, 
  },
  reducers: {
    resellerLogin: (state, action) => {
      state.reseller = action.payload.reseller;
      state.subscriptionActive = action.payload.subscriptionActive;
      state.subscription = action.payload.subscription || null; 
    },
    resellerLogout: (state) => {
      state.reseller = null;
      state.subscriptionActive = false;
      state.subscription = null;
    },
  activateSubscription: (state) => {
  state.subscriptionActive = true;
  state.subscription = {
    ...state.subscription,
    paymentStatus: "paid"
  };
}

  },
});

export const { resellerLogin, resellerLogout, activateSubscription } = resellerSlice.actions;
export default resellerSlice.reducer;

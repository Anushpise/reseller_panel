import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBranding = createAsyncThunk(
  "branding/fetchBranding",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("/api/reseller/branding", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Branding fetch failed");
    }
  }
);

const brandingSlice = createSlice({
  name: "branding",
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  reducers: {
    resetBranding: (state) => {
      state.data = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBranding.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBranding.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBranding.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetBranding } = brandingSlice.actions;

export default brandingSlice.reducer;

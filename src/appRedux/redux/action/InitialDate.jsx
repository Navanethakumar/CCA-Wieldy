import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  data: [],
  error: ''
};

// Generates pending, fulfilled and rejected action types
export const GetDefaultDateFilter = createAsyncThunk('GetDefaultDateFilter', async () => {
  try {
    const response = await axios.get(
      `https://ccaapp-api.azurewebsites.net/api/CCA/GetDefaultDateFilter`
    );
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.log('error', error);
  }
});
const GetDefaultDateFilterSlice = createSlice({
  name: 'GetDefaultDateFilter',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(GetDefaultDateFilter.pending, (state) => {
        state.loading = true;
        state.data = [];
        state.error = '';
      })
      .addCase(GetDefaultDateFilter.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action?.payload;
        state.error = '';
      })
      .addCase(GetDefaultDateFilter.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.payload || action.error.message;
      })
      .addDefaultCase((state) => {
        // Handle any other action types that might not be caught by the above cases
        state.loading = false;
      });
  }
});

export default GetDefaultDateFilterSlice.reducer;

import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  data: [],
  error: ''
};

// Generates pending, fulfilled and rejected action types
export const GetCallByRegionMap = createAsyncThunk('GetCallByRegionMap', async ({ v1 }) => {
  try {
    const response = await axios.get(
      `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallByRegionMap?EmployeeId=${v1}`
    );
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.log('error', error);
  }
});

const GetCallByRegionMapSlice = createSlice({
  name: 'GetCallByRegionMap',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GetCallByRegionMap.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetCallByRegionMap.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(GetCallByRegionMap.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  }
});

export default GetCallByRegionMapSlice.reducer;

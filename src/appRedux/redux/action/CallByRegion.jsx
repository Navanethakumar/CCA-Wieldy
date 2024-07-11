import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  data: [],
  error: ''
};

// Generates pending, fulfilled and rejected action types
export const GetCallByRegion = createAsyncThunk('GetCallByRegion', async ({ v1, v2, v3, v4 }) => {
  try {
    const response = await axios.get(
      `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallByRegion?EmployeeId=${v1}&StartDate=${v2}&EndDate=${v3}&Region=${v4}`
    );
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.log('error', error);
  }
});

const GetCallByRegionSlice = createSlice({
  name: 'GetCallByRegion',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GetCallByRegion.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetCallByRegion.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(GetCallByRegion.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  }
});

export default GetCallByRegionSlice.reducer;

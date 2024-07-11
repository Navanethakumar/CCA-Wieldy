import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  data: [],
  error: ''
};

// Generates pending, fulfilled and rejected action types
export const GetCallByRegionDrilldown = createAsyncThunk(
  'GetCallByRegionDrilldown',
  async ({ v1, v2, v3, v4 }) => {
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallByRegionDD?EmployeeId=${v1}&StartDate=${v2}&EndDate=${v3}&Region=${v4}`
      );
      if (response.status == 200) {
        return response.data;
      }
    } catch (error) {
      console.log('error', error);
    }
  }
);
const GetCallByRegionDrilldownSlice = createSlice({
  name: 'GetCallByRegionDrilldown',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GetCallByRegionDrilldown.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetCallByRegionDrilldown.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(GetCallByRegionDrilldown.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  }
});

export default GetCallByRegionDrilldownSlice.reducer;

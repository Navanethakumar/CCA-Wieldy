import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  data: [],
  error: ''
};

// Generates pending, fulfilled and rejected action types
export const GetDispositionPieChart = createAsyncThunk(
  'GetDispositionPieChart',
  async ({ v1, v2, v3 }) => {
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallCenterDispositionPieChart?EmployeeId=${v1}&StartDate=${v2}&EndDate=${v3}`
      );
      if (response.status == 200) {
        return response.data;
      }
    } catch (error) {
      console.log('error', error);
    }
  }
);

const GetDispositionPieChartSlice = createSlice({
  name: 'GetDispositionPieChart',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GetDispositionPieChart.pending, (state) => {
      state.loading = true;
      state.data = [];
      state.error = '';
    });
    builder.addCase(GetDispositionPieChart.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(GetDispositionPieChart.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  }
});

export default GetDispositionPieChartSlice.reducer;

import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  data: [],
  error: ''
};

// Generates pending, fulfilled and rejected action types
export const GetTop10AgentFCR = createAsyncThunk('GetTop10AgentFCR', async ({ v1, v2, v3 }) => {
  try {
    const response = await axios.get(
      `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallTop10AgentByFCR?EmployeeId=${v1}&StartDate=${v2}&EndDate=${v3}`
    );
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.log('error', error);
  }
});

const GetTop10AgentFCRSlice = createSlice({
  name: 'GetTop10AgentFCR',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(GetTop10AgentFCR.pending, (state) => {
        state.loading = true;
        state.data = [];
        state.error = '';
      })
      .addCase(GetTop10AgentFCR.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = '';
      })
      .addCase(GetTop10AgentFCR.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.payload || action.error.message;
      });
  }
});

export default GetTop10AgentFCRSlice.reducer;

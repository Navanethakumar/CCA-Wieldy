import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  data: [],
  error: ''
};

// Generates pending, fulfilled and rejected action types
export const GetBottom10AgentFCR = createAsyncThunk(
  'GetBottom10AgentFCR',
  async ({ v1, v2, v3 }) => {
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallBottom10AgentByFCR?EmployeeId=${v1}&StartDate=${v2}&EndDate=${v3}`
      );
      if (response.status == 200) {
        return response.data;
      }
    } catch (error) {
      console.log('error', error);
    }
  }
);
const GetBottom10AgentFCRSlice = createSlice({
  name: 'GetBottom10AgentFCR',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(GetBottom10AgentFCR.pending, (state) => {
        state.loading = true;
        state.data = [];
        state.error = '';
      })
      .addCase(GetBottom10AgentFCR.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = '';
      })
      .addCase(GetBottom10AgentFCR.rejected, (state, action) => {
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

export default GetBottom10AgentFCRSlice.reducer;

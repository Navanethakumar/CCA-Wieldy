import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  data: [],
  error: ''
};

// Generates pending, fulfilled and rejected action types
export const ClearUserDetails = createAsyncThunk('ClearUserDetails', async ({ v1 }) => {
  try {
    const response = await axios.get(
      `https://ccaapp-api.azurewebsites.net/api/CCA/ClearUserDetails?EmployeeId=${v1}`
    );
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.log('error', error);
  }
});
const ClearUserDetailsSlice = createSlice({
  name: 'ClearUserDetails',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(ClearUserDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(ClearUserDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(ClearUserDetails.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  }
});

export default ClearUserDetailsSlice.reducer;

import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  data: [],
  error: ''
};

// Generates pending, fulfilled and rejected action types
export const GetUserDetails = createAsyncThunk('GetUserDetails', async ({ v1 }) => {
  try {
    const response = await axios.get(
      `https://ccaapp-api.azurewebsites.net/api/CCA/GetUserDetails?EmployeeId=${v1}`
    );
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.log('error', error);
  }
});

const GetUserDetailsSlice = createSlice({
  name: 'GetUserDetails',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GetUserDetails.pending, (state) => {
      state.loading = true;
      state.data = [];
    });
    builder.addCase(GetUserDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.Table;
      state.error = '';
    });
    builder.addCase(GetUserDetails.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  }
});

export default GetUserDetailsSlice.reducer;

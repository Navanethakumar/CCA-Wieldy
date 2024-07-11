import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  data: [],
  error: ''
};

// Generates pending, fulfilled and rejected action types
export const GetSplitGroup = createAsyncThunk('GetSplitGroup', async ({ v1, v2, v3 }) => {
  try {
    const response = await axios.get(
      `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallCenterTop10SplitGroupBarChart?EmployeeId=${v1}&StartDate=${v2}&EndDate=${v3}`
    );
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.log('error', error);
  }
});

const GetSplitGroupSlice = createSlice({
  name: 'GetSplitGroup',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GetSplitGroup.pending, (state) => {
      state.loading = true;
      state.data = [];
    });
    builder.addCase(GetSplitGroup.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(GetSplitGroup.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  }
});

export default GetSplitGroupSlice.reducer;

import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  data: [],
  error: ''
};

// Generates pending, fulfilled and rejected action types
export const GetImporsinationDD = createAsyncThunk('GetImporsinationDD', async ({ v1 }) => {
  try {
    const response = await axios.get(
      `https://ccaapp-api.azurewebsites.net/api/CCA/GetImporsinationDD?EmployeeId=${v1}`
    );
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.log('error', error);
  }
});
const GetImporsinationDDSlice = createSlice({
  name: 'GetImporsinationDD',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GetImporsinationDD.pending, (state) => {
      state.loading = true;
      state.data = [];
    });
    builder.addCase(GetImporsinationDD.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.Table;
      state.error = '';
    });
    builder.addCase(GetImporsinationDD.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  }
});

export default GetImporsinationDDSlice.reducer;

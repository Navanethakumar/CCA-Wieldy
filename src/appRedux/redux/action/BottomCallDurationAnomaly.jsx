import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  data: [],
  error: ''
};

// Generates pending, fulfilled and rejected action types
export const GetBottom5CallDurationAnomaly = createAsyncThunk(
  'GetBottom5CallDurationAnomaly',
  async () => {
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetBottom5CallDurationAnomaly`
      );
      if (response.status == 200) {
        return response.data;
      }
    } catch (error) {
      console.log('error', error);
    }
  }
);

const GetBottom5CallDurationAnomalySlice = createSlice({
  name: 'GetBottom5CallDurationAnomaly',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GetBottom5CallDurationAnomaly.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetBottom5CallDurationAnomaly.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(GetBottom5CallDurationAnomaly.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  }
});

export default GetBottom5CallDurationAnomalySlice.reducer;

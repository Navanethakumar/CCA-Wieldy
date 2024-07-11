import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  data: [],
  error: ''
};

// Generates pending, fulfilled and rejected action types
export const GetTopCallDurationAnomaly = createAsyncThunk('GetTopCallDurationAnomaly', async () => {
  try {
    const response = await axios.get(
      `https://ccaapp-api.azurewebsites.net/api/CCA/GetTop5CallDurationAnomaly`
    );
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.log('error', error);
  }
});

const GetTopCallDurationAnomalySlice = createSlice({
  name: 'GetTopCallDurationAnomaly',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GetTopCallDurationAnomaly.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetTopCallDurationAnomaly.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(GetTopCallDurationAnomaly.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  }
});

export default GetTopCallDurationAnomalySlice.reducer;

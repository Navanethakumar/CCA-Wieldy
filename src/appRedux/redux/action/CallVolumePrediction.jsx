import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  data: [],
  error: ''
};

// Generates pending, fulfilled and rejected action types
export const GetCallVolumePrediction = createAsyncThunk('GetCallVolumePrediction', async () => {
  try {
    const response = await axios.get(
      `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallVolumePredictionChart`
    );
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.log('error', error);
  }
});

const GetCallVolumePredictionSlice = createSlice({
  name: 'GetCallVolumePrediction',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GetCallVolumePrediction.pending, (state) => {
      state.loading = true;
      state.data = [];
    });
    builder.addCase(GetCallVolumePrediction.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.Table;
      state.error = '';
    });
    builder.addCase(GetCallVolumePrediction.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  }
});

export default GetCallVolumePredictionSlice.reducer;

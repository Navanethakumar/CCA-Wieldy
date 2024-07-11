import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  data: [],
  error: ''
};

// Generates pending, fulfilled and rejected action types
export const GetCallCentreUserDD = createAsyncThunk('GetCallCentreUserDD', async () => {
  try {
    const response = await axios.get(
      `https://ccaapp-api.azurewebsites.net/api/CCA/GetCallCentreUserDD`
    );
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.log('error', error);
  }
});

const GetCallCentreUserDDSlice = createSlice({
  name: 'GetCallCentreUserDD',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GetCallCentreUserDD.pending, (state) => {
      state.loading = true;
      state.data = [];
    });
    builder.addCase(GetCallCentreUserDD.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.Table;
      state.error = '';
    });
    builder.addCase(GetCallCentreUserDD.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  }
});

export default GetCallCentreUserDDSlice.reducer;

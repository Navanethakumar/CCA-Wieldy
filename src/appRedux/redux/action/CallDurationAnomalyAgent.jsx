import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  data: [],
  error: ''
};

// Generates pending, fulfilled and rejected action types
export const GetCallDurationAnomalyAgent = createAsyncThunk(
  'GetCallDurationAnomalyAgent',
  async ({ v1 }) => {
    try {
      const response = await axios.get(
        `https://ccaapp-api.azurewebsites.net/api/CCA/GetTopCallDurationAnomalyByAgent?EmployeeId=${v1}`
      );
      if (response.status == 200) {
        return response.data;
      }
    } catch (error) {
      console.log('error', error);
    }
  }
);
const GetCallDurationAnomalyAgentSlice = createSlice({
  name: 'GetCallDurationAnomalyAgent',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GetCallDurationAnomalyAgent.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetCallDurationAnomalyAgent.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(GetCallDurationAnomalyAgent.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  }
});

export default GetCallDurationAnomalyAgentSlice.reducer;

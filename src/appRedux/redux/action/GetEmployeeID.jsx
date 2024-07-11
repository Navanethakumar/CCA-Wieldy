import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 'AG131' };

const GetEmployeeIDSlice = createSlice({
  name: 'GetEmployeeIDSlice',
  initialState,
  reducers: {
    GetEmployeeID: (state, action) => {
      return { ...state, value: action.payload };
    }
  }
});

export const { GetEmployeeID } = GetEmployeeIDSlice.actions;
export default GetEmployeeIDSlice.reducer;

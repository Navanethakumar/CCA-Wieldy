import { createSlice } from '@reduxjs/toolkit';

const initialState = { startDate: null, endDate: null };

const DatepickerredSlice = createSlice({
  name: 'DatepickerredSlice',
  initialState,
  reducers: {
    Datepickerred: (state, action) => {
      const { startDate, endDate } = action.payload;
      if (startDate === null && endDate === null) {
        // If both startDate and endDate are null, do nothing
        console.log('Both startDate and endDate are null. No API call.');
        return state;
      } else {
        console.log('Updating dates', action.payload);
        return { ...state, startDate, endDate };
      }
    }
  }
});

export const { Datepickerred } = DatepickerredSlice.actions;
export default DatepickerredSlice.reducer;

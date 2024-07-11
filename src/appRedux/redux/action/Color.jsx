import { createSlice } from '@reduxjs/toolkit';

const colorSlice = createSlice({
  name: 'color',
  initialState: {
    color: '#ffffff' // default color
  },
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    }
  }
});

export const { setColor } = colorSlice.actions;
export default colorSlice.reducer;

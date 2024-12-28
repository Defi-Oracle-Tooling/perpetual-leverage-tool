import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    history: [],
  },
  reducers: {
    addCalculation: (state, action) => {
      state.history.push(action.payload);
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export const { addCalculation, clearHistory } = calculatorSlice.actions;
export default calculatorSlice.reducer; 
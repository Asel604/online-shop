import { createSlice } from "@reduxjs/toolkit";
export const countSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    addCount: (state) => {
      state.value += 1;
    },

    reduceCount: (state) => {
      state.value -= 1;
    },
    addCart: (state) => {
      state.value += 1;
    },
    reduceCart: (state) => {
      state.value -= 1;
    },
  },
});
export const { reduceCart } = countSlice.actions;
export const { addCart } = countSlice.actions;
export const { addCount } = countSlice.actions;
export const { reduceCount } = countSlice.actions;
export default countSlice.reducer;

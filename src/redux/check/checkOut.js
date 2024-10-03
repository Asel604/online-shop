import { createSlice } from "@reduxjs/toolkit";

const checkSlice = createSlice({
  name: "check",
  initialState: {
    list: [],
  },
  reducers: {
    addCheck: (state, action) => {
      const findProduct = state.list.find((x) => x.id == action.payload.id);
      if (!findProduct) {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});
export const { addCheck } = checkSlice.actions;
export default checkSlice.reducer;

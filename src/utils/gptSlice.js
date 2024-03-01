import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggelGptSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggelGptSearch } = gptSlice.actions;
export default gptSlice.reducer;

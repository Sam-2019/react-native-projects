import { createSlice } from "@reduxjs/toolkit";

export const citySlice = createSlice({
  name: "cities",
  initialState: [],
  reducers: {
    addCity: (state, action) => {
      return state.concat(action.payload);
    },
  },
});

export const { addCity } = citySlice.actions;

export const cityData = (state) => state.cities;

export default citySlice.reducer;

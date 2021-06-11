import { createSlice } from "@reduxjs/toolkit";

export const citySlice = createSlice({
  name: "cities",
  initialState: [
    { id: '123', city: 'Tokyo', country: "Japan" },
    { id: '1234', city: 'Tema', country: "Ghana" },
  ],
  reducers: {
    addCity: (state, action) => {
      return state.concat(action.payload);
    },
  },
});

export const { addCity } = citySlice.actions;

export const cityData = (state) => state.cities;

export default citySlice.reducer;

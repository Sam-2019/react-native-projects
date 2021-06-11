import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
  name: "cities",
  initialState: [
    
  ],
  reducers: {
    addCity: (state, action) => {
      return state.concat(action.payload);
    },
  },
});

export const { addCity } = citiesSlice.actions;

export const citiesData = (state) => state.cities;

export default citiesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
  name: "cities",
  initialState: [],
  reducers: {
    addCity: (state, action) => {
      const newCities = [...state, action.payload];
      return newCities;
    },
  },
});

export const { addCity } = citiesSlice.actions;

export const citiesData = (state) => state.cities;

export default citiesSlice.reducer;

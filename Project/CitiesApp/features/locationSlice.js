import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "locations",
  initialState: [],
  reducers: {
    addCity: (state, action) => {
      return state.concat(action.payload);
    },
  },
});

export const { addLocation } = locationSlice.actions;

export const locationData = (state) => state.locations;

export default locationSlice.reducer;

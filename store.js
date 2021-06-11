import { configureStore } from "@reduxjs/toolkit";
import cityReducer from './Project/CitiesApp/features/citySlice'
import locationReducer from './Project/CitiesApp/features/locationSlice'

export default configureStore({
  reducer: {
    cities: cityReducer,
    locations: locationReducer
  },
});

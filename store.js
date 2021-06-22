import { configureStore } from "@reduxjs/toolkit";
import cityReducer from './Project/features/citySlice'
import locationReducer from './Project/features/locationSlice'

export default configureStore({
  reducer: {
    cities: cityReducer,
    locations: locationReducer
  },
});

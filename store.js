import { configureStore } from "@reduxjs/toolkit";
import cityReducer from './Project/CitiesApp/features/citySlice'

export default configureStore({
  reducer: {
    cities: cityReducer,
  },
});

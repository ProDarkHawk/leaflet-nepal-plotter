import { mapReducer } from "@redux/reducer/map-reducer";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  map: mapReducer,
});

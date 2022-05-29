import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { City } from "../../../interfaces/citiesList";
import { CitiesState } from "../../../interfaces/states/index";

const initialState: CitiesState = {
  cities: [],
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    getCities: (state, action: PayloadAction<City[]>) => {
      state.cities = action.payload;
    },
  },
});

export const { getCities } = citiesSlice.actions;

export default citiesSlice.reducer;

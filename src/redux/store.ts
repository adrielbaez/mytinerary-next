import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { citiesSlice } from "./cities";

export const store = configureStore({
  reducer: {
    cities: citiesSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

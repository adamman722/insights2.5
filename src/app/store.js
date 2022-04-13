import { configureStore } from "@reduxjs/toolkit";
import CoinSliceReducer from "../features/CoinSlice";

export const store = configureStore({
  reducer: {
    CoinSlice: CoinSliceReducer,
  },
});

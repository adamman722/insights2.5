import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const CoinStorageSlice = createSlice({
  name: "CoinStorage",
  //I know what I am doing is not not right but there is nothing else I can do...
  initialState,
  reducers: {
    addToStorage: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { addToStorage } = CoinStorageSlice.actions;
//I need help but I do not know how to ask
export default CoinStorageSlice.reducer;

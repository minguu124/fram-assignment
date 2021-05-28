import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: 0
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    counterIncrease: (state) => {
      state.data = state.data + 1;
    },
    counterReset: () => {
      return initialState;
    }
  }
});

export const { counterIncrease, counterReset } = counterSlice.actions;

export const { reducer: counterReducer } = counterSlice;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isSuccess: false,
  data: [],
  error: undefined
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    startUsers: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
    },
    usersSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      if (action.payload) {
        state.data = action.payload;
      }
    },
    usersFail: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    resetUsers: () => {
      return initialState;
    }
  }
});

export const { startUsers, usersSuccess, usersFail, resetUsers } =
  usersSlice.actions;

export const { reducer: usersReducer } = usersSlice;

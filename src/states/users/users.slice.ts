import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isSuccess: false,
  data: [],
  page: 1,
  total: 0,
  limit: 0,
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
        state.data = action.payload?.data;
        state.total = action.payload?.total;
        state.page = action.payload?.page;
        state.limit = action.payload?.limit;
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

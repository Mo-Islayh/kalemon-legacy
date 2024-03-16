import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  success: false,
  error: false,
  data: [],
  loading: false,
  errors: [],
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
});

export const loginReducer = loginSlice.reducer;

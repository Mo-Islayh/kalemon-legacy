import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  success: false,
  error: false,
  data: [],
  loading: false,
  errors: [],
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
});

export const signupReducer = signupSlice.reducer;

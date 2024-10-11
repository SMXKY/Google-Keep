import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  img: "",
  isLoggedIn: false,
  jwt: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const userReducer = userSlice.reducer;

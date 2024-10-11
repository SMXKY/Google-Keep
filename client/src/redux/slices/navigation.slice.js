import { createSlice } from "@reduxjs/toolkit";
import Logo from "../../assets/logo.png";

const initialState = (
  <div className="home-navigation-info">
    <img className="logo" alt="logo" src={Logo} title="Keep" />
    <p title="Keep">Keep</p>
  </div>
);

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    updateNavInfo: (state, { payload }) => {
      state = payload;
    },
  },
});

export const navigationReducer = navigationSlice.reducer;
export const { updateNavInfo } = navigationSlice.actions;

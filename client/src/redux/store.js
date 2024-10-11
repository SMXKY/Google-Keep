import { configureStore } from "@reduxjs/toolkit";
import { navigationReducer } from "./slices/navigation.slice";
import { userReducer } from "./slices/user.slice";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    user: userReducer,
  },
});

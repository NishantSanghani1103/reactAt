import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/auth/userSclice";

export const store = configureStore({
    reducer: {
        user: userSlice
    }
})
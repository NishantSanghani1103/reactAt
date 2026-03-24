import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slice/usrerSlice";

export const store = configureStore({
    reducer: {
        user: userSlice
    }
})
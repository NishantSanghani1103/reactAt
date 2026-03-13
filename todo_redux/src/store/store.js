import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../reducer/toDoSlice";
import userSlice from "../reducer/userSlice";


export const store = configureStore({
    reducer: {
        todo: todoSlice,
        user: userSlice
    }
})
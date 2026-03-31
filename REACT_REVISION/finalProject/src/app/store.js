import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import authSlice from "../features/auth/authSlice";
import userFormSlice from "../features/user/userFormSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        user: authSlice,
        userRegister: userFormSlice
    }
})
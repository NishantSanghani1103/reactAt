import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import authSlice from "../features/auth/authSlice";
import userFormSlice from "../features/user/userFormSlice";
import globalCart from "../features/cartThunk/cartThunkSlice";
import globalCartProduct from "../features/cartThunk/cartThunckDetailsSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        user: authSlice,
        userRegister: userFormSlice,
        cartGlobal: globalCart,
        globalCartProduct: globalCartProduct
    }
})
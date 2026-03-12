import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: JSON.parse(localStorage.getItem("CART")) ?? []
    },
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload);
            state.cart.push(action.payload)
            localStorage.setItem("CART", JSON.stringify(state.cart))
        },
        removeCart: (state, action) => {
            console.log(action.payload);
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload
            )
            localStorage.setItem("CART", JSON.stringify(state.cart))
        }
    }
})
export const { addToCart, removeCart } = cartSlice.actions
export default cartSlice.reducer
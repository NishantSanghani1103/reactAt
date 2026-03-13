import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: JSON.parse(localStorage.getItem("CART")) ?? []
    },
    reducers: {
        addToCart: (state, action) => {
            // console.log(action.payload);
            state.cart.push(action.payload)
            localStorage.setItem("CART", JSON.stringify(state.cart))
        },
        removeCart: (state, action) => {
            console.log(action.payload);
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload
            )
            localStorage.setItem("CART", JSON.stringify(state.cart))
        },
        updateQty: (state, action) => {
            const { id, qty } = action.payload
            const item = state.cart.find(p => p.id === id)
            if (item) {
                item.qty = qty
            }
            localStorage.setItem("CART", JSON.stringify(state.cart))
        }
    }
})
export const { addToCart, removeCart ,updateQty} = cartSlice.actions
export default cartSlice.reducer
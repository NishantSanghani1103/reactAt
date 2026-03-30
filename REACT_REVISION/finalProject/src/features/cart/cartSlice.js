import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: JSON.parse(localStorage.getItem("CART")) ?? []
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload]
            localStorage.setItem("CART", JSON.stringify(state.cart))
        },
        cartQty: (state, action) => {
            const { id, qty } = action.payload
            const items = state.cart.find((value, index) => value.id == id)
            console.log(items);

            if (items) {
                items.qty = qty
            }

            localStorage.setItem("CART", JSON.stringify(state.cart))


        },
        removeFromCart: (state, action) => {
            const finalCartItems = state.cart.filter((value, index) => value.id != action.payload)

            state.cart = finalCartItems
            localStorage.setItem("CART",JSON.stringify(state.cart))
        }
    }
})

export const { addToCart, cartQty ,removeFromCart} = cartSlice.actions

export default cartSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: JSON.parse(localStorage.getItem("CART")) ?? []
    },
    reducers: {
        addToCart: (state, action) => {
            const { id } = action.payload
            console.log(action.payload);

            const checkInCart = state.cart.some((value, index) => value.id == id)
            if (checkInCart) {
                alert("Items Already In Cart...!!")
            }
            else {
                state.cart.push(action.payload)
                localStorage.setItem("CART", JSON.stringify(state.cart))

            }
        },
        removeCart: (state, action) => {
            console.log(action.payload);

            const fileredData = state.cart.filter((value, index) => value.id != action.payload)
            state.cart = fileredData
            localStorage.setItem("CART", JSON.stringify(fileredData))

        }
    }
})
export const { addToCart, removeCart } = cartSlice.actions
export default cartSlice.reducer
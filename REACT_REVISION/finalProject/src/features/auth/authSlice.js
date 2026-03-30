import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "user",
    initialState: {
        user: JSON.parse(localStorage.getItem("USER")) ?? null
    },
    reducers: {
        logIn: (state, action) => {
            console.log(action.payload);
            state.user = action.payload
            localStorage.setItem("USER", JSON.stringify(state.user))
        },
        logOut: (state, action) => {
            state.user = null
            localStorage.removeItem("USER")
        }
    }
})

export const { logIn, logOut } = authSlice.actions

export default authSlice.reducer
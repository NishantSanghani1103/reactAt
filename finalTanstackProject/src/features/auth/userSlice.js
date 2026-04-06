import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: JSON.parse(localStorage.getItem("USER")) ?? null
    },
    reducers: {
        logIn: (state, action) => {
            state.user = action.payload
            localStorage.setItem("USER", JSON.stringify(state.user))
        },
        logOut: (state, action) => {
            state.user = null
            localStorage.removeItem("USER")
        }
    }
})
export const { logIn, logOut } = userSlice.actions

export default userSlice.reducer
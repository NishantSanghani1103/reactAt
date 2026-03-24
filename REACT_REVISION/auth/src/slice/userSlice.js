import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: JSON.parse(localStorage.getItem("USER")) ?? null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            localStorage.setItem("USER", JSON.stringify(state.user))
        },
        logOut: (state, action) => {
            state.user = null
            localStorage.removeItem("USER")
        }
    }
})
export const { login, logOut } = userSlice.actions
export default userSlice.reducer
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
        }
    }
})
export const { login } = userSlice.actions
export default userSlice.reducer
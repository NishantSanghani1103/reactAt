import { createSlice } from "@reduxjs/toolkit";

export const userFormSlice = createSlice({
    name: "userRegister",
    initialState: {
        userRegister: JSON.parse(localStorage.getItem("USER_REGISTER")) ?? []
    },
    reducers: {
        addUser: (state, action) => {
            state.userRegister = [...state.userRegister, action.payload]
            localStorage.setItem("USER_REGISTER", JSON.stringify(state.userRegister))
        },
        deleteUser: (state, action) => {
            state.userRegister = state.userRegister.filter((value, index) => index != action.payload)
            localStorage.setItem("USER_REGISTER", JSON.stringify(state.userRegister))
        }
    }
})

export const { addUser, deleteUser } = userFormSlice.actions

export default userFormSlice.reducer
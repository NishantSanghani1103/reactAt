import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser } from "../api/userApi";

export const fatchUser = createAsyncThunk(
    'user/fatchuser',
    async () => {
        const res = await getUser()
        return res.data
    }
)
export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: [],
    },
    extraReducers: (builder) => {
        builder.addCase(fatchUser.fulfilled, (state, action) => {            
            state.user = action.payload
        })
    }
})

export default userSlice.reducer
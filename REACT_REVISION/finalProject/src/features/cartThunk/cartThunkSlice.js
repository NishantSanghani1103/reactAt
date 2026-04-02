import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGlobalCart } from "./services/cartThunkApi";

export const fatchCart = createAsyncThunk(
    'cart/cartThunk',
    async (_, { rejectWithValue }) => {
        try {
            const res = await getGlobalCart()
            // console.log(res);
            return res.data
        } catch (error) {
            return rejectWithValue(error.message)
        }

    }
)
export const globalCart = createSlice({
    name: "globalCart",
    initialState: {
        error: "",
        loading: false,
        globalCart: [],
    },
    extraReducers: (builder) => {
        builder.addCase(fatchCart.fulfilled, (state, action) => {
            state.loading = false
            state.globalCart = action.payload
        })
            .addCase(fatchCart.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(fatchCart.pending, (state, action) => {
                state.loading = true
                state.error = null;
            })
    }
})
export default globalCart.reducer
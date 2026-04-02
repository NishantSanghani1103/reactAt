import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { globalCartDetails } from "./services/cartThunkApi";

export const fetchGlobalCartDetails = createAsyncThunk(
    "/fetchGlobalCartDetails",
    async (payload, { rejectWithValue }) => {
        console.log(payload);
        try {
            const res = await globalCartDetails(payload)
            return res.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const globalCartProduct = createSlice({
    name: "globalCartProduct",
    initialState: {
        globalCartProduct: null,
        globalCartLoading: false,
        globalCartError: ""
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGlobalCartDetails.pending, (state, action) => {
            state.globalCartLoading = true
        })
            .addCase(fetchGlobalCartDetails.rejected, (state, action) => {
                state.globalCartLoading = false
                state.globalCartError = action.payload
            })
            .addCase(fetchGlobalCartDetails.fulfilled, (state, action) => {
                state.globalCartLoading = false
                state.globalCartProduct = action.payload
            })
    }
})

export default globalCartProduct.reducer
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        counterIncrement: (state) => {
            state.count += 1
        },
        counterDecrement: (state) => {
            state.count -= 1
        }
    }
})
export const { counterIncrement, counterDecrement } = counterSlice.actions
export default counterSlice.reducer
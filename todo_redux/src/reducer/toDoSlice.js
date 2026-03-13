import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        task: JSON.parse(localStorage.getItem("TASK")) ?? []
        // editTask: ""
    },
    reducers: {
        addTask: (state, action) => {
            if (action.payload != "") {
                if (!state.task.includes(action.payload)) {
                    console.log(action.payload);
                    const res = state.task.push(action.payload)
                    console.log(res);
                    localStorage.setItem("TASK", JSON.stringify(state.task))
                }
                else {
                    alert("Task Already In List...!!")
                }
            }
            else {
                alert("Please Add Task...!!")
            }

        },
        removeTask: (state, action) => {
            state.task = state.task.filter((value, index) => {
                return value != action.payload
            })
            localStorage.setItem("TASK", JSON.stringify(state.task))
        },
        // singleView: (state, action) => {
        //     const res = state.task.find((value) => value == action.payload)
        //     state.editTask = res

        // },
        // updateTask: (state, action) => {
        //     console.log(action.payload);

        //     const task = state.task.find(
        //         (value) => value === action.payload
        //     )
        //     console.log(task);

        //     //  localStorage.setItem("TASK", JSON.stringify(state.task))
        // }

    }
})

export const { addTask, removeTask, singleView, updateTask } = todoSlice.actions

export default todoSlice.reducer
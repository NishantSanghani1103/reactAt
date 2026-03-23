import { createStore } from "@tanstack/react-store";

export const counterState = createStore({
    count: JSON.parse(localStorage.getItem("COUNT")) ?? 0
})
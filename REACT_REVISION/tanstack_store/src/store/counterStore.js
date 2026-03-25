import { createStore } from "@tanstack/react-store";
export const counterStore = createStore(
    {
        count: 0
    }
)
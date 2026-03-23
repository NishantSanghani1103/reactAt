import { createStore } from "@tanstack/react-store";

export const cartStore = createStore({
    cart: JSON.parse(localStorage.getItem("CART")) ?? []
})
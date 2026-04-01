import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const getHomeProduct = (skip, limit) => {
    return api.get("/products", {
        params: {
            limit
        }
    })
}
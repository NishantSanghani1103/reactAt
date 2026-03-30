import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const getProduct = (skip, limit) => {
    return api.get("/products", {
        params: {
            skip: (skip - 1) * limit,
            limit
        }
    })
}

export const getProductDetails = (id) => {
    return api.get(`/products/${id}`)
}
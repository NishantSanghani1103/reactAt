import axios from "axios";

const api = axios.create({
    baseURL: "https://dummyjson.com"
})
export const getProduct = (skip, limit = 10) => {
    return api.get("/products", {
        params: {
            skip: (skip - 1) * limit,
            limit
        }
    })
}

export const getSingleProduct = (id) => {
    return api.get(`/products/${id}`)
}
import axios from "axios";

const api = axios.create({
    baseURL: `https://dummyjson.com`
})
export const getProduct = (limit, skip) => {
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
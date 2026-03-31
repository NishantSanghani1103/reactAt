import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const getProduct = (search, skip, limit) => {
    let url = ""
    if (search) {
        url = "/products/search"
    }
    else {
        url = "/products"
    }
    return api.get(url, {
        params: {
            q: search || undefined,
            skip: (skip - 1) * limit,
            limit
        }
    })
}

export const getProductDetails = (id) => {
    return api.get(`/products/${id}`)
}
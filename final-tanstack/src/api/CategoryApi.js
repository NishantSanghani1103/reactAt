import axios from "axios";

const api = axios.create({
    baseURL: `https://dummyjson.com/products`
})

export const getCategory = () => {
    return api.get(`/categories`)
}
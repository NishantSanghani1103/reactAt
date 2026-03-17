import axios from "axios";

const api = axios.create({
    baseURL: "https://dummyjson.com/"
})

export const getProduct = () => {
    return api.get("/products")
}
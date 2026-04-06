import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_HOME_PRODUCT
})

export const getHomeProduct = () => {
    return api.get("/products")
}
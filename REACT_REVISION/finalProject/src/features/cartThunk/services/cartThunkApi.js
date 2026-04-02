import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const getGlobalCart = () => {
    return api.get("/carts", {
        params: {
            limit: 10
        }
    })
}

export const globalCartDetails = (id) => {
    return api.get(`/carts/${id}`)
}
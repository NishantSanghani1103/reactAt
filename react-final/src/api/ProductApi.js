import axios from "axios";

const api = axios.create({
    baseURL: "https://dummyjson.com"
})

export const getProduct = (page) => {
    console.log(page);

    return api.get("/products", {
        params: {
            skip: page,
            limit: 20
        }
    })
}
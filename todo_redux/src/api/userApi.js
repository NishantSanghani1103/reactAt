import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com"
})

export const getUser = () => {
    return api.get(`/users`, {
        params: {
            per_page: 10,
        }
    })
}
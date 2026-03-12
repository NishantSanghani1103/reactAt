import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com"
})

export const getUser = (page = 1) => {
    console.log(page);
    
    return api.get(`/users`, {
        params: {
            per_page: 10,
            since:page
        }
    })
}
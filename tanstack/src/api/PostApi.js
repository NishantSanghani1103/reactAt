import axios from "axios";

const api = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`
})
export const getPostData = (limit, currentPage) => {
    return api.get("/posts", {
        params: {
            _start: (currentPage - 1) * limit,
            _limit: limit
        }
    })
}
export const deletePost = (id) => {
    return api.delete(`/posts/${id}`)
}
export const singleView = (id) => {
    return api.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
}

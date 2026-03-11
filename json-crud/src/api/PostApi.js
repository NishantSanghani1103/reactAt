import axios from "axios";

const api = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`
})

export const getPost = () => {
    return api.get("/posts")
}

export const deletePost = (id) => {
    return api.delete(`/posts/${id}`)
}

export const addPost = (obj) => {
    return api.post("/posts", obj)
}
export const singleView = (id) => {
    return api.get(`/posts/${id}`)
}

export const updatePost = (id, obj) => {
    return api.put(`/posts/${id}`, obj)
}
import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_PRODUCT_API
})

export const getProduct = (categoryName, brandsName) => {
    return api.get("/products.php", {
        params: {
            categories: categoryName.join(","),
            brands: brandsName.join(",")
        }
    })
}
export const getCategory = () => {
    return api.get("/categories.php")
}
export const getBrands = () => {
    return api.get("/brands.php")
}
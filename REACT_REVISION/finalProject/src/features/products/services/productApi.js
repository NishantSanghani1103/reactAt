import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_FILTER_PRODUCT_URL
})

export const getCategory = () => {
    return api.get("/categories.php")
}

export const getBrand = () => {
    return api.get("/brands.php")
}

export const getProduct = (categoryName, brandName, skip) => {
    return api.get("/products.php", {
        params: {
            page: skip,
            limit: 9,
            categories: categoryName.join(","),
            brands: brandName.join(",")
        }
    })
}
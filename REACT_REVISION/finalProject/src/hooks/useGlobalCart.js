import { useSelector } from "react-redux"

export const useGlobalCart = () => {
    const { globalCart, loading, error } = useSelector((store) => store.cartGlobal)
    return { globalCart, loading, error }
}
export const useGlobalCartProductDetails = () => {
    const {globalCartError,globalCartLoading,globalCartProduct} = useSelector((store) => store.globalCartProduct)
    return {globalCartError,globalCartLoading,globalCartProduct}
}
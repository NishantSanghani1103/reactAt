import React, { useEffect, useState } from 'react'
import { getProduct } from '../api/productApi'
import { useDispatch } from 'react-redux'
import { addToCart } from '../slice/cartSlice'

export default function Shop() {
    const [productData, setproductData] = useState([])
    const [error, seterror] = useState("")
    const [loading, setloading] = useState(true)



    useEffect(() => {
        const getData = async () => {
            try {
                const res = await getProduct()
                setproductData(res.data.products)
                setloading(false)

            } catch (error) {
                seterror(error.message);

            }
        }
        getData()
    }, [])
    return (
        <>
            <section className="max-w-7xl mx-auto px-4 py-8">
                {/* Title */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Products</h2>
                    <button className="border px-4 py-1 rounded-md text-sm">Filter</button>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {/* Product Card 1 */}
                    {
                        loading
                            ?
                            <p>Loading...</p>
                            :
                            error
                                ?
                                <p>{error}</p>
                                :
                                productData.map((value, index) => {
                                    return (
                                        <ProductRow key={index} value={value} />
                                    )
                                })
                    }
                </div>
            </section>
        </>
    )
}

function ProductRow({ value }) {
    const dispatch = useDispatch()
    const addCart = (id) => {
        const cartObj = {
            id,
            title: value.title,
            thumbnail: value.thumbnail,
            price: value.price,
            qty: "1"
        }

        dispatch(addToCart(cartObj))
    }
    return (
        <>
            <div className="border rounded-xl p-4 hover:shadow-md">
                <img src={value.thumbnail} className="w-full h-40 object-cover rounded-md" />
                <h3 className="mt-3 font-semibold">{value.title}</h3>
                <p className="text-gray-600">₹ {value.price}</p>
                <button className="mt-2 w-full bg-black text-white py-1 rounded-md" onClick={() => addCart(value.id)}>Add to Cart</button>
            </div>
        </>
    )
}
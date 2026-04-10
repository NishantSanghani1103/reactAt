import React, { useEffect, useState } from 'react'
import ProductCategory from './productListing/ProductCategory'
import Products from './productListing/Products'
import axios from 'axios'

export default function Home() {

    const [categoryData, setcategoryData] = useState([])
    const [productData, setproductData] = useState([])
    const [loading, setloading] = useState(true)
    const categoryView = () => {
        axios.get(`https://dummyjson.com/products/categories`)
            .then((res) => {
                setcategoryData(res.data)
                setloading(false)
            }
            )
    }

    const productView = () => {
        axios.get(`https://dummyjson.com/products`)
            .then((res) => setproductData(res.data.products)
            )
    }

    useEffect(() => {
        categoryView()
        productView()
    }, [categoryData])

    return (
        <>
            <div className="bg-light min-vh-100 d-flex flex-column">
       


                <div className="container-fluid py-5 px-4 flex-grow-1">
                    <div className="row">
                        {
                            loading
                                ?
                                <p>Loading....</p>
                                :
                                <ProductCategory categoryData={categoryData} />
                        }


                        <div className="col-lg-9">
                            <Products productData={productData} />
                        </div>

                    </div>
                </div>


      

            </div>
        </>
    )
}

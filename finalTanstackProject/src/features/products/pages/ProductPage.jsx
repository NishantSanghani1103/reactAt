import { keepPreviousData, useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { getProduct } from '../services/ProductPageApi'
import { Link } from '@tanstack/react-router'
import ProductFilter from '../components/ProductFilter'
import ProductItems from '../components/ProductItems'

export default function ProductPage() {
    const [searchName, setsearchName] = useState("")
    const [categoryName, setcategoryName] = useState([])
    const [brandsName, setbrandsName] = useState([])
    const productData = async () => {
        const res = await getProduct(categoryName, brandsName)
        return res.data
    }
    const { data, isError, error, isLoading } = useQuery({
        queryKey: ["products", categoryName,brandsName],
        queryFn: productData,
        placeholderData: keepPreviousData
    })
    // console.log(data);

    useEffect(() => {
        console.log(brandsName);

    }, [brandsName])

    return (
        <div className="container mt-4">

            {/* Page Title */}
            <h2 className="mb-4 text-center">Latest Products</h2>

            <div className="row">

                {/* 🔥 LEFT SIDE FILTERS (STATIC UI) */}
                <div className="col-md-3 mb-4">
                    <ProductFilter
                        setsearchName={setsearchName}
                        setcategoryName={setcategoryName}
                        categoryName={categoryName}
                        setbrandsName={setbrandsName}
                        brandsName={brandsName}
                    />
                </div>

                {/* 🔥 RIGHT SIDE PRODUCTS */}
                <div className="col-md-9">

                    <div className="row">
                        {
                            isLoading
                                ?
                                <p>Loading.....</p>
                                :
                                isError
                                    ?
                                    <p>{error.message}</p>
                                    :
                                    
                                    data?.data?.map((value, index) => <ProductItems value={value} key={index} />)
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}


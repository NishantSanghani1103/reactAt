import React from 'react'
import { getBrand, getCategory } from '../services/productApi'
import { useQuery } from '@tanstack/react-query'

export default function ProductFilter({setskip, categoryName, setcategoryName, brandName, setbrandName }) {
    const getCategoryData = async () => {
        const res = await getCategory()
        return res.data
    }

    const getBrandData = async () => {
        const res = await getBrand()
        return res.data
    }
    const { data, isError, isLoading, error } = useQuery({
        queryKey: ["category"],
        queryFn: getCategoryData
    })
    const { data: brandData } = useQuery({
        queryKey: ["brands"],
        queryFn: getBrandData
    })

    console.log(brandData?.data);
    const handleCategoryChange = (event) => {
          setskip(1)
        if (event.target.checked) {
            setcategoryName([...categoryName, event.target.value])
        }
        else {
            setcategoryName(categoryName.filter((value, index) => value != event.target.value))
        }
    }

    const handleBrandChange = (event) => {
        setskip(1)
        if (event.target.checked) {
            setbrandName([...brandName, event.target.value])
        }
        else {
            setbrandName(brandName.filter((value, index) => value != event.target.value))
        }
    }
    return (
        <div className="col-md-3">
            <div className="card p-3 shadow-sm h-25 overflow-y-scroll">
                <div className='d-flex justify-content-between'>
                    <h5 className="mb-3">Filters</h5>
                    <p className='fw-bold' onClick={() => {
                        setbrandName([])
                        setcategoryName([])
                    }}>Clear All</p>
                </div>
                {/* Category */}
                <div className="mb-3">
                    <h6>Category</h6>
                    {
                        isLoading
                            ?
                            <p>Loading.....</p>
                            :
                            isError
                                ?
                                <p>{error.message}</p>
                                :
                                data?.data?.map((value, index) => {
                                    return (
                                        <div key={index}>
                                            <input type="checkbox" value={value.slug} onChange={handleCategoryChange} /> {value.name}
                                        </div>
                                    )
                                })


                    }

                </div>

                <div className="mb-3 ">
                    <h6>Brands</h6>
                    {
                        isLoading
                            ?
                            <p>Loading.....</p>
                            :
                            isError
                                ?
                                <p>{error.message}</p>
                                :
                                brandData?.data?.map((value, index) => {
                                    return (
                                        <div key={index}>
                                            <input type="checkbox" value={value.slug} onChange={handleBrandChange} /> {value.name}
                                        </div>
                                    )
                                })
                    }

                </div>


            </div>
        </div>
    )
}

import React from 'react'
import { getProduct } from '../services/productApi';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
export default function ProductItems({ categoryName, brandName, skip, setskip }) {
    console.log(categoryName);
    const productItems = async () => {
        const res = await getProduct(categoryName, brandName, skip)
        return res.data
    }
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["products", categoryName, brandName, skip],
        queryFn: productItems,
        placeholderData: keepPreviousData
    })
    console.log(data?.data);
    return (
        <>
            {
                isLoading
                    ?
                    <p>Loading....</p>
                    :
                    isError
                        ?
                        <p>{error.message}</p>
                        :
                        data?.data?.length == 0
                            ?
                            <p>Products Not Found....</p>
                            :
                            data?.data?.map((value, index) => {
                                const { image, name, price } = value
                                return (
                                    <div key={index} className="col-md-4 mb-4">
                                        <div className="card shadow-sm">
                                            <img
                                                src={image}
                                                className="card-img-top"
                                                alt="product"
                                            />
                                            <div className="card-body">
                                                <h6>{name}</h6>
                                                <p className="text-muted">₹ {price}</p>
                                                <button className="btn btn-primary w-100">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                )
                            })
            }
            <ResponsivePagination
                current={skip}
                total={Math.ceil(data?.total_records / data?.limit)}
                onPageChange={setskip}
            />


        </>


    )
}

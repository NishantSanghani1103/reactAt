/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { getProduct } from '../../../api/ProductApi'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

export default function Product() {

    const productData = async ({ pageParam = 0 }) => {
        const ans = await getProduct(pageParam)
        return ans.data
    }
    const { data, isError, error, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage, } = useInfiniteQuery({
        queryKey: ["products"],
        queryFn: productData,
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPage) => {
            const nextSkip = lastPage.skip + lastPage.limit
            return nextSkip < lastPage.total ? nextSkip : undefined
        }
    })
    const handleChange = () => {
        // console.log(window.innerHeight);
        // console.log("scroll", window.scrollY);
        // console.log("final", document.documentElement.scrollHeight);
        const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight
        console.log(bottom);

        if (bottom && hasNextPage && !isFetchingNextPage) {
            fetchNextPage()
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleChange)
        return () => {
            window.removeEventListener("scroll", handleChange)
        }
    }, [hasNextPage, isFetchingNextPage])

    console.log(data);

    return (
        <>
            <div className="bg-light min-vh-100 d-flex flex-column">
                <div className="container-fluid py-5 px-4 flex-grow-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                {
                                    isLoading
                                        ?
                                        <p>Loading....</p>
                                        :
                                        isError
                                            ?
                                            <p>{error.message}</p>
                                            :
                                            data?.pages.map((val, ind) => {
                                                return val?.products?.map((value, index) => <ProductRow value={value} key={index} />)

                                            }
                                            )
                                }
                                {

                                    isFetchingNextPage
                                    &&
                                    <p>Loagin More....</p>

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
function ProductRow({ value }) {
    const { thumbnail, title, price, description } = value
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
            <div className="card w-100 shadow-sm rounded-4 border-0">
                <div>
                    <img src={thumbnail} className='w-100' alt="Product" />
                </div>
                <div className="card-body d-flex flex-column">

                    <h6 className="fw-semibold">{title}</h6>

                    <p className="text-muted small line">
                        {description}
                    </p>

                    <div className="mt-auto">
                        <h6 className="fw-bold text-primary">
                            ₹ {price}
                        </h6>

                        <button className="btn btn-dark w-100 rounded-pill mt-2">
                            Add to Cart
                        </button>


                    </div>

                </div>

            </div>

        </div>
    )
}

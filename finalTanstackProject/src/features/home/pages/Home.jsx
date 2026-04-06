
import React from 'react'
import { Route } from '../../../routes/index' //
import { useQuery } from '@tanstack/react-query'
import { getHomeProduct } from '../services/HomeProductApi'

export default function Home() {
    const initialData = Route.useLoaderData()
    const { data } = useQuery({
        queryKey: ['homeProducts'],
        queryFn: getHomeProduct,
        initialData
    })

    // console.log(data);


    return (
        <div className="container mt-4">

            {/* Page Title */}
            <h2 className="mb-4 text-center">Latest Products</h2>

            <div className="row">
                {/* <div className="col-md-3 mb-4">
                    <div className="card h-100 shadow-sm">
                        <img
                            src="https://via.placeholder.com/300"
                            className="card-img-top"
                            alt="product"
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title">{"title"}</h5>
                            <p className="card-text text-muted">₹999</p>
                            <button className="btn btn-dark w-100">Add to Cart</button>
                        </div>
                    </div>
                </div> */}



                {
                    data?.products?.map((value, index) => {
                        return (
                            <div className="col-md-3 mb-4" key={index}>
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src="https://picsum.photos/300"
                                        className="card-img-top"
                                        alt="product"
                                    />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{value.title}</h5>
                                        <p className="card-text text-muted">₹{value.price}</p>
                                        <button className="btn btn-dark w-100">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {/* Product 1 */}

            </div>
        </div>
    )
}

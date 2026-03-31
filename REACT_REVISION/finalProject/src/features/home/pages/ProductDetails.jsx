/* eslint-disable react-hooks/set-state-in-effect */
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../services/homeProduct'

export default function ProductDetails() {
    const { id } = useParams()
    const [img, setimg] = useState(null)
    const getDetails = async () => {
        const res = await getProductDetails(id)
        return res.data
    }
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["products", id],
        queryFn: getDetails
    })

    useEffect(() => {
        if (data?.thumbnail) {
            setimg(data.thumbnail)
        }

    }, [data?.thumbnail])
    if (isError) return <p>Loading....</p>
    return (
        <div className="container my-5">
            <div className="row">
                {/* Product Images */}
                <div className="col-md-6">
                    <img
                        src={img}
                        alt="Product"
                        className="img-fluid rounded mb-3"
                        width={"546px"}
                    />
                    <div className="d-flex gap-2">
                        {data?.images?.map((i) => (
                            <img
                                key={i}
                                src={i}
                                alt="thumb"
                                className="img-thumbnail"
                                style={{ width: "80px", cursor: "pointer" }}
                                onClick={() => setimg(i)}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="col-md-6">
                    <h2 className="fw-bold">{data?.title}</h2>
                    <p className="text-muted">{data?.brand}</p>

                    <h4 className="text-primary mb-3">₹{data?.price}</h4>

                    <p>
                        {data?.description}
                    </p>

                    {/* Ratings */}
                    <div className="mb-3">
                        <span className="text-warning">★★★★☆</span>
                        <span className="ms-2 text-muted">(120 reviews)</span>
                    </div>

                    {/* Options */}


                    {/* Quantity */}
                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input
                            type="number"
                            className="form-control"
                            defaultValue={1}
                            min={1}
                        />
                    </div>

                    {/* Buttons */}
                    <div className="d-flex gap-3">
                        <button className="btn btn-primary w-50">Add to Cart</button>
                        <button className="btn btn-outline-secondary w-50">
                            Buy Now
                        </button>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-4">
                        <h6>Product Details</h6>
                        <ul className="list-unstyled">
                            <li>✔ High quality material</li>
                            <li>✔ 1 year warranty</li>
                            <li>✔ Free delivery</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="mt-5">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button className="nav-link active">Description</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link">Reviews</button>
                    </li>
                </ul>

                <div className="border p-3">
                    <p>
                        Detailed product description goes here. You can include specs,
                        materials, usage instructions, etc.
                    </p>
                </div>
            </div>
        </div>
    )
}

/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../api/ProductApi'
import { useQuery } from '@tanstack/react-query'

export default function ProductDetails() {

    const { id } = useParams()
    const [thumbPath, setthumbPath] = useState(null)
    const getData = async () => {
        const res = await getProductDetails(id)
        return res.data
    }

    const { data, isLoading } = useQuery({
        queryKey: ["details", id],
        queryFn: getData
    })

    console.log(data);

    useEffect(() => {
        if (data?.thumbnail) {
            setthumbPath(data.thumbnail)
        }
    }, [data])


    return (

        <div className="container my-5">
            {
                isLoading
                    ?
                    <p>Loading...</p>
                    :
                    <div className="row g-5">

                        {/* LEFT SIDE - Images */}
                        <div className="col-lg-6">

                            {/* Main Image */}
                            <div className="card border-0 shadow-sm rounded-4">
                                <img
                                    src={thumbPath}
                                    alt="Product"
                                    className="img-fluid rounded-4"
                                />
                            </div>

                            {/* Thumbnail Images */}
                            <div className="d-flex flex-wrap gap-3 mt-3">
                                {data?.images?.map((value, index) => (
                                    <img
                                        onClick={() => setthumbPath(value)}
                                        key={index}
                                        src={value}
                                        alt="thumb"
                                        className="img-thumbnail rounded-3"
                                        style={{ width: "80px", cursor: "pointer" }}
                                    />
                                ))}
                            </div>

                        </div>

                        {/* RIGHT SIDE - Product Info */}
                        <div className="col-lg-6">

                            <h2 className="fw-bold mb-3">{data?.title}</h2>

                            {/* Rating */}
                            <div className="mb-3">
                                <span className="badge bg-success me-2">
                                    {data?.rating} ★
                                </span>
                                <span className="text-muted">
                                    {data?.stock} In Stock
                                </span>
                            </div>

                            {/* Price */}
                            <div className="mb-4">
                                <h3 className="fw-bold text-primary">
                                    ₹{data?.price}
                                    <span className="text-decoration-line-through text-muted fs-5 ms-3">
                                        ₹ {Math.round(data?.price * 1.2)}
                                    </span>
                                    {/* <span className=" text-success fs-5 ms-3">
                                            - ({((singleData?.price * 10) / 100).toFixed(2)})%
                                        </span> */}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-muted">
                                {data?.description}
                            </p>

                            {/* Quantity & Buttons */}
                            <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                                <input
                                    type="number"
                                    className="form-control"
                                    style={{ width: "100px" }}
                                    defaultValue="1"
                                    min="1"
                                />
                                <button className="btn btn-dark px-4 rounded-pill">
                                    Add to Cart
                                </button>
                                <button className="btn btn-outline-dark px-4 rounded-pill">
                                    Buy Now
                                </button>
                            </div>

                            {/* Extra Info */}
                            <ul className="list-group list-group-flush shadow-sm rounded-3">
                                <li className="list-group-item">✔ Free Shipping</li>
                                <li className="list-group-item">✔ 7 Days Return Policy</li>
                                <li className="list-group-item">✔ Secure Payment</li>
                            </ul>

                        </div>

                    </div>
            }

        </div>
    )
}

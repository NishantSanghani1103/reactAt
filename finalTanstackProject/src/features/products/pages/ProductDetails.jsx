import { useParams } from '@tanstack/react-router'
import React from 'react'
import { Route } from '../../../routes/products/$id'

export default function ProductDetails() {
    const { id } = Route.useParams()
    console.log(id);

    return (
        <div className="container mt-5">

            <div className="row">

                {/* Product Image */}
                <div className="col-md-6">
                    <img
                        src="https://picsum.photos/500"
                        alt="product"
                        className="img-fluid rounded shadow"
                    />
                </div>

                {/* Product Info */}
                <div className="col-md-6">

                    <h2>Premium Headphones</h2>

                    <h4 className="text-muted mt-3">₹2,499</h4>

                    <p className="mt-3">
                        Experience high-quality sound with these premium headphones.
                        Designed for comfort and performance, perfect for music lovers.
                    </p>

                    {/* Buttons */}
                    <div className="mt-4 d-flex gap-2">
                        <button className="btn btn-dark px-4">Add to Cart</button>
                        <button className="btn btn-outline-dark px-4">Buy Now</button>
                    </div>

                    {/* Extra Info */}
                    <div className="mt-4">
                        <p><strong>Category:</strong> Electronics</p>
                        <p><strong>Availability:</strong> In Stock</p>
                        <p><strong>Brand:</strong> MyShop</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

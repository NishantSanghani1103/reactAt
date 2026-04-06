import { Link } from '@tanstack/react-router'
import React from 'react'

export default function ProductItems({value}) {
     const { id, name, slug, image, price } = value
    return (
        <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
                <img
                    src={image}
                    className="card-img-top"
                    alt="product"
                />
                <div className="card-body text-center">
                    <Link className='text-decoration-none' mask={{ to: "/products" }} to={`/products/${id}`}>
                        <h5 className="card-title text-black ">{name}</h5>
                    </Link>
                    <p className="card-text text-muted">₹ {price}</p>
                    <button className="btn btn-dark w-100">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

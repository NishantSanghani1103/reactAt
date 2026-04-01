import { Link, useLoaderData } from '@tanstack/react-router'
import React from 'react'
import { getHomeProduct } from '../../../services/homeProduct'
import { useQuery } from '@tanstack/react-query'

export default function Home() {

    const data = useLoaderData({ from: "/" })
    console.log(data);



    return (
        <section className="container">
            <div className="container my-5">
                <h1 className="mb-4 text-center">Our Products</h1>

                <div className="row">
                    {/* Product 1 */}
                    {
                        data?.products?.map((value, index) => <ProductRow value={value} key={value.id} />)
                    }
                </div>
            </div>
        </section>
    )
}
function ProductRow({ value }) {
    const { id,title, thumbnail, price } = value
    return (
        <div className="col-6 col-md-3 mb-4">
            <div className="card h-100">
                <Link to="#">
                    <img
                        src={thumbnail}
                        className="card-img-top"
                        alt="Product"
                    />
                </Link>
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">₹ {price}</p>
                    <button className="btn btn-primary btn-sm">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
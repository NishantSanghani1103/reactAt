import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getProduct } from '../services/homeProduct'

export default function Home() {
    const productData = async () => {
        const res = await getProduct()
        return res.data
    }
    const { data, isError, error, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: productData
    })
    console.log(data);

    return (
        <section className='container'>
            <div className="container my-5">
                <h1 className="mb-4 text-center">Our Products</h1>
                <div className="row">
                    {/* Product 1 */}
                    {
                        isLoading
                            ?
                            <p>Loading....</p>
                            :
                            isError
                                ?
                                <p>{error.message}</p>
                                :
                                data?.products?.map((value, index) => <ProductRows value={value} key={index} />)
                    }

                </div>
            </div>
        </section>
    )
}

function ProductRows({ value }) {
    const { title, price, thumbnail } = value
    return (
        <>
            <div className="col-6 col-md-3 mb-4">
                <div className="card h-100">
                    <img
                        src={thumbnail}
                        className="card-img-top"
                        alt="Product 4"
                    />
                    <div className="card-body text-center">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{price} /-</p>
                        <button className="btn btn-primary btn-sm">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

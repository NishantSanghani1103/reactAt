/* eslint-disable react-refresh/only-export-components */
import { createFileRoute, Link } from '@tanstack/react-router'
import { getProduct } from '../api/productApi'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { cartStore } from '../stores/cartStore'
import { useState } from 'react'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';

export const Route = createFileRoute('/')({
    component: RouteComponent,
})
function RouteComponent() {
    const [skip, setskip] = useState(1)
    const getProductData = async () => {
        const res = await getProduct(skip)
        return res.data
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["products", skip],
        queryFn: getProductData,
        placeholderData: keepPreviousData
    })
    return (
        <>
            <section className='container'>
                <main className='container-fluid'>
                    <div className=" ">
                        <div className="row ">
                            {
                                isLoading
                                    ?
                                    <p>Loading....</p>
                                    :
                                    isError
                                        ?
                                        <p>{error.message}</p>
                                        :
                                        data?.products.map((value, index) => {

                                            return (
                                                <ProductRow value={value} key={index} />
                                            )
                                        })
                            }
                        </div>
                    </div>
                    <ResponsivePagination
                        current={skip}
                        total={Math.floor(data?.total / 10)}
                        onPageChange={setskip}
                    />
                </main>
            </section>
        </>
    )
}
function ProductRow({ value }) {
    const { id, title, description, price, thumbnail } = value
    const addToCart = () => {
        const cartObj = {
            id,
            title,
            price,
            thumbnail,
            qty: "1"
        }
        cartStore.setState((prev) => {
            // console.log(prev.cart.map);
            const checkItemInCart = prev.cart.some((items) => items.id == id)
            if (checkItemInCart) {
                return prev
            }
            else {
                return {
                    cart: [...prev.cart, cartObj]
                }
            }
        })

    }
    return (
        <>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex ">
                <div className="card w-100 shadow-sm rounded-4 border-0">
                    <img src={thumbnail} alt="Product" />
                    <div className="card-body d-flex flex-column">
                        <Link className='text-black text-decoration-none' to={`/products/$id`} params={{ id: id }} mask={{to:"/products"}}>
                            <h6 className="fw-semibold">{title}</h6>
                        </Link>
                        <p className="text-muted small line">{description}.</p>
                        <div className="mt-auto">
                            <h6 className="fw-bold text-primary"> ₹ {price}</h6>

                            <button onClick={addToCart} className="btn btn-dark w-100 rounded-pill mt-2">Add to Cart</button>

                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
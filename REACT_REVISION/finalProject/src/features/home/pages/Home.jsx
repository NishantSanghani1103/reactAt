import { keepPreviousData, useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { getProduct } from '../services/homeProduct'
import { Link, useOutletContext } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../cart/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
export default function Home() {
    const { search, skip, setskip } = useOutletContext()
    const limit = 12
    const productData = async () => {
        const res = await getProduct(search, skip, limit)
        return res.data
    }
    const { data, isError, error, isLoading } = useQuery({
        queryKey: ["products", skip, search],
        queryFn: productData,
        placeholderData: keepPreviousData
    })
    // console.log(data);

    // useEffect(() => {
    //     console.log(search);
    // }, [search])
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
                                data?.products?.length == 0
                                    ?
                                    <p>Products Not Found...!!</p>
                                    :
                                    data?.products?.map((value, index) => <ProductRows value={value} key={index} />)
                    }

                </div>
            </div>
            <ToastContainer />
            <ResponsivePagination
                current={skip}
                total={Math.ceil((data?.total) / limit)}
                onPageChange={setskip}
            />
        </section>
    )
}

function ProductRows({ value }) {
    const { id, title, price, thumbnail } = value
    const dispatch = useDispatch()
    const { cart } = useSelector((store) => store.cart)
    const addCart = () => {
        const obj = {
            id,
            title,
            price,
            thumbnail,
            qty: "1"
        }
        const checkItemsInCart = cart.find((value, index) => value.id == id)
        if (checkItemsInCart) {
            return toast.error("Items Already In Cart....!!")
        }
        dispatch(addToCart(obj))
        toast.success("Item Added In Cart....!!")

    }
    return (
        <>
            <div className="col-6 col-md-3 mb-4">
                <div className="card h-100">
                    <Link to={`/products/${id}`}>
                        <img
                            src={thumbnail}
                            className="card-img-top"
                            alt="Product 4"
                        />
                    </Link>
                    <div className="card-body text-center">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{price} /-</p>
                        <button className="btn btn-primary btn-sm" onClick={addCart}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

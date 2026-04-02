/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fatchCart } from '../cartThunkSlice'
import { useGlobalCart } from '../../../hooks/useGlobalCart'
import { Link } from 'react-router-dom'

export default function CartThunk() {
    const dispatch = useDispatch()
    const { globalCart, error, loading } = useGlobalCart()
    console.log(globalCart.carts);

    const data = useGlobalCart()
    console.log(data);


    useEffect(() => {

        dispatch(fatchCart())


    }, [])
    return (
        <div className="container my-5">
            <h2 className="mb-4 fw-bold">Shopping Cart</h2>

            <div className="row">
                {/* Cart Items */}
                {/* {
                    carts.map((value, index) => {
                        console.log(value);
                        
                    })
                } */}


                {
                    loading
                        ?
                        <p>Loading....</p>
                        :
                        error
                            ?
                            <p>{error}</p>
                            :
                            globalCart?.carts?.map((value, index) => {
                                return value?.products?.map((products, productsIndex) => {
                                    console.log(products);
                                    return (
                                        <div key={products.id} className="col-md-12">

                                            <div className="card mb-3 shadow-sm">
                                                <div className="row g-0 align-items-center">
                                                    <Link to={`/cart/thunk/${value.id}`} className="col-md-3 text-center p-2">
                                                        <img src={products.thumbnail} className="img-fluid rounded" alt="Product" />
                                                    </Link>
                                                    <div className="col-md-5">
                                                        <div className="card-body">
                                                            <h5 className="card-title">{products.title}</h5>
                                                            <p className="text-muted mb-0">₹ {(products.price).toFixed(2)}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <input type="number" className="form-control" min={1} max={10} value={1} readOnly />
                                                    </div>
                                                    <div className="col-md-2 text-end pe-3">
                                                        <button className="btn btn-outline-danger btn-sm">Remove</button>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    )
                                })

                            })
                }

            </div>

        </div>
    )
}

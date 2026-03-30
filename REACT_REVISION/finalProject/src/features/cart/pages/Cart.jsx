import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, cartQty, removeFromCart } from '../cartSlice'
import { toast, ToastContainer } from 'react-toastify'

export default function Cart() {
    const { cart } = useSelector((store) => store.cart)
    const total = cart.reduce((acc, cuu) => acc += cuu.price * cuu.qty, 0)
    return (
        <div className="container my-5">
            <h2 className="mb-4 fw-bold">Shopping Cart</h2>

            <div className="row">
                {/* Cart Items */}
                <div className="col-md-8">

                    {
                        cart.length==0
                        ?
                        <p>Cart Items Not Found....</p>
                        :
                        cart.map((value, index) => <CartRow value={value} key={index} />)
                    }

                </div>

                {/* Summary */}
                <div className="col-md-4">
                    <div className="card shadow-sm p-3">
                        <h5 className="fw-bold mb-3">Order Summary</h5>
                        <div className="d-flex justify-content-between mb-2">
                            <span>Subtotal</span>
                            <span>₹ {total.toFixed(2)}</span>
                        </div>

                        <div className="d-flex justify-content-between mb-2">
                            <span>Delivery</span>
                            <span className="text-success">Free</span>
                        </div>

                        <hr />

                        <div className="d-flex justify-content-between fw-bold mb-3">
                            <span>Total</span>
                            <span>₹ {total.toFixed(2)}</span>
                        </div>

                        <button className="btn btn-primary w-100">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
             <ToastContainer />
        </div>
    )
}


function CartRow({ value }) {
    const [newQty, setnewQty] = useState(1)
    const { cart } = useSelector((store) => store.cart)
    const dispatch = useDispatch()

    const { id, thumbnail, title, price, qty } = value
    const handleQtyChange = (event) => {
        const finalQty = event.target.value

        dispatch(cartQty({
            id: id,
            qty: finalQty
        }))

    }
    const removeCart = () => {
        toast.success("Item Removed From The Cart...!!")
        dispatch(removeFromCart(id))
    }
    return (
        <div className="card mb-3 shadow-sm">
            <div className="row g-0 align-items-center">
                <div className="col-md-3 text-center p-2">
                    <img src={thumbnail} className="img-fluid rounded" alt="Product" />
                </div>
                <div className="col-md-5">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="text-muted mb-0">₹ {(price * qty).toFixed(2)}</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <input type="number" className="form-control" value={qty} onChange={handleQtyChange} min={1} max={10} />
                </div>
                <div className="col-md-2 text-end pe-3">
                    <button onClick={removeCart} className="btn btn-outline-danger btn-sm">Remove</button>
                </div>
            </div>
           
        </div>
    )
}
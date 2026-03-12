import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../reducer/cartSlice';

export default function Cart() {
    const { cart } = useSelector((store) => store.cart)
    console.log(cart);

    return (
        <div className="bg-light min-vh-100 d-flex flex-column">

            {/* Cart Section */}
            <div className="container my-5 flex-grow-1">
                <div className="row g-4">

                    {/* LEFT SIDE - Cart Items */}
                    <div className="col-lg-8">

                        {/* Cart Item */}
                        <div className="card mb-4 shadow-sm border-0 rounded-4">
                            {
                                cart.length == 0
                                    ?
                                    <div className="row g-0 align-items-center p-3">
                                        <p className="text-center">Cart Is Empty...!!</p>
                                    </div>
                                    :
                                    cart.map((value, index) => {
                                        return (
                                            <CartRow value={value} key={index} />
                                        )
                                    })
                            }

                        </div>

                    </div>

                    {/* RIGHT SIDE - Order Summary */}
                    {/* <div className="col-lg-4">
                        <div className="card shadow-sm border-0 rounded-4 p-4">

                            <h5 className="fw-bold mb-4">Order Summary</h5>

                            <div className="d-flex justify-content-between mb-2">
                                <span>Subtotal</span>
                                <span>₹ {totalPrice.toFixed(2)}</span>
                            </div>

                            <div className="d-flex justify-content-between mb-2">
                                <span>Shipping</span>
                                <span className="text-success">Free</span>
                            </div>

                            <hr />

                            <div className="d-flex justify-content-between fw-bold mb-4">
                                <span>Total</span>
                                <span className="text-primary">₹ {totalPrice.toFixed(2)}</span>
                            </div>

                            <button className="btn btn-dark w-100 rounded-pill mb-2">
                                Proceed to Checkout
                            </button>

                            <button className="btn btn-outline-dark w-100 rounded-pill">
                                Continue Shopping
                            </button>

                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
function CartRow({ value }) {
    const dispatch = useDispatch()
    const handleRemove = () => {
        alert(value.id)
        dispatch(removeCart(value.id))
    }
    return (
        <div className="row g-0 align-items-center p-3">

            <div className="col-md-3 text-center">
                <img
                    src={value.thumbnail}
                    className="img-fluid rounded-3"
                    alt="Product"
                />
            </div>

            <div className="col-md-6">
                <h5 className="fw-semibold">{value.title}</h5>
                <p className="text-muted small mb-1">
                    Short product description here.
                </p>
                <p className="text-primary fw-bold mb-0">₹ {value.price * value.qty}</p>
            </div>

            <div className="col-md-3 text-center">
                <input
                    type="number"
                    className="form-control mb-2"
                    defaultValue="1"
                    min="1"

                />
                <button onClick={handleRemove} className="btn btn-outline-danger btn-sm">
                    Remove
                </button>
            </div>

        </div>
    )
}
/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router'
import { useStore } from '@tanstack/react-store'
import { cartStore } from '../stores/cartStore'


export const Route = createFileRoute('/cart')({
    component: RouteComponent,
})

function RouteComponent() {
    const cart = useStore(cartStore, (store) => store.cart)
    console.log(cart);
    const total = cart.reduce((acc, cuu) => acc += cuu.price * cuu.qty, 0)


    return (
        <>
            <div className="bg-light min-vh-100 d-flex flex-column">

                {/* Cart Section */}
                <div className="container my-5 flex-grow-1">
                    <div className="row g-4">

                        {/* LEFT SIDE - Cart Items */}
                        <div className="col-lg-8">
                            {/* Cart Item */}
                            {
                                cart.map((value, index) => {
                                    return (
                                        <CartRow value={value} key={index} cart={cart} />
                                    )
                                })
                            }
                        </div>

                        {/* RIGHT SIDE - Order Summary */}
                        <div className="col-lg-4">
                            <div className="card shadow-sm border-0 rounded-4 p-4">

                                <h5 className="fw-bold mb-4">Order Summary</h5>

                                <div className="d-flex justify-content-between mb-2">
                                    <span>Subtotal</span>
                                    <span>₹ {total.toFixed(2)}</span>
                                </div>

                                <div className="d-flex justify-content-between mb-2">
                                    <span>Shipping</span>
                                    <span className="text-success">Free</span>
                                </div>

                                <hr />

                                <div className="d-flex justify-content-between fw-bold mb-4">
                                    <span>Total</span>
                                    <span className="text-primary">₹ {total.toFixed(2)}</span>
                                </div>

                                <button className="btn btn-dark w-100 rounded-pill mb-2">
                                    Proceed to Checkout
                                </button>

                                <button className="btn btn-outline-dark w-100 rounded-pill">
                                    Continue Shopping
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function CartRow({ value, cart }) {

    console.log(cart);

    const removeFromCart = (id) => {
        const updatedCart = cart.filter((value, index) => value.id != id)
        console.log(updatedCart);

        cartStore.setState((prev) => {
            return {
                ...prev,
                cart: updatedCart
            }
        })

    }
    const handleQty = (event) => {
        const qtyUpdated = cart.map((items, index) => {
            console.log(value.id == items.id);

            return items.id == value.id
                ?
                {
                    ...items,
                    qty: event.target.value
                }
                :
                items
        })
        console.log(qtyUpdated);
        cartStore.setState((prev) => {
            return {
                ...prev,
                cart: qtyUpdated
            }
        })
    }
    return (
        <>
            <div className="card mb-4 shadow-sm border-0 rounded-4">

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
                            onChange={handleQty}
                            value={value.qty}
                        />
                        <button onClick={() => removeFromCart(value.id)} className="btn btn-outline-danger btn-sm">
                            Remove
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

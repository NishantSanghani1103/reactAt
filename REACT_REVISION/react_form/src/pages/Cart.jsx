import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../slice/cartSlice';

export default function Cart() {
    const [qty, setqty] = useState(1)
    const { cart } = useSelector((store) => store.cart)
    console.log(cart);
    const dispatch = useDispatch()

    
    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    {
                        cart.map((value, index) => {
                            console.log(value);
                            return (
                                <div key={index} className="flex gap-4 border rounded-xl p-4 items-center">
                                    <img src={value.thumbnail} className="w-24 h-24 object-cover rounded-md" />
                                    <div className="flex-1">
                                        <h3 className="font-semibold">{value.title}</h3>
                                        <p className="text-gray-500 text-sm">₹ {value.price}</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <button className="border px-2" onClick={() => setqty(qty - 1)}>-</button>
                                            <span>{qty}</span>
                                            <button className="border px-2" onClick={() => setqty(qty + 1)}>+</button>
                                        </div>
                                    </div>
                                    <button className="text-red-500 text-sm" onClick={() => dispatch(removeCart(value.id))}>Remove</button>
                                </div>
                            )
                        })
                    }

                </div>

                {/* Summary */}
                <div className="border rounded-xl p-4 h-fit">
                    <h3 className="font-semibold mb-4">Order Summary</h3>

                    <div className="flex justify-between text-sm mb-2">
                        <span>Subtotal</span>
                        <span>₹4,498</span>
                    </div>

                    <div className="flex justify-between text-sm mb-2">
                        <span>Shipping</span>
                        <span>₹100</span>
                    </div>

                    <div className="flex justify-between font-semibold border-t pt-2 mt-2">
                        <span>Total</span>
                        <span>₹4,598</span>
                    </div>

                    <button className="mt-4 w-full bg-black text-white py-2 rounded-md">
                        Checkout
                    </button>
                </div>
            </div>
        </section>
    )
}

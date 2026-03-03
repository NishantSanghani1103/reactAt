import React, { createContext, useState } from 'react'
import { CartContext } from './Data/CartContext'

export default function MainContext({ children }) {
    const [cart, setcart] = useState(JSON.parse(localStorage.getItem("CART")) ?? [])
    let obj = {
        cart,
        setcart
    }
    return (
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>
    )
}

import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../Data/CartContext'

export default function Header() {
    const { cart } = useContext(CartContext)
    // console.log(cart);

    return (
        <>
            <nav className="navbar position-sticky top-0 z-1 border navbar-expand-lg navbar-dark bg-dark py-3 w-100">
                <div className="container-fluid px-4">
                    <a className="navbar-brand fw-bold" href="#">MyShop</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <NavLink to={'/'} className="nav-link"> Home</NavLink>
                            {/* <NavLink to={'/'} className="nav-link"> Products</NavLink> */}
                            <NavLink to={'/cart'} className="nav-link"> Cart ({cart.length})</NavLink>
                            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

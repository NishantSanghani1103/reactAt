import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const {cart} = useSelector((store) => store.cart)
  
    


    return (
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
                        <NavLink to={'/contact'} className="nav-link"> Contact</NavLink>
                        <NavLink to={'/scroll'} className="nav-link"> Users</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

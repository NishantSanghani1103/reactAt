import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { logOut } from '../features/auth/authSlice'

export default function Header({ setsearch, setskip }) {
    const { cart } = useSelector((store) => store.cart)
    const { user } = useSelector((store) => store.user)
    const dispatch = useDispatch()
    // console.log(user);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm position-sticky top-0 z-2">
            <div className="container">

                {/* Logo */}
                <a className="navbar-brand fw-bold text-primary" href="#">
                    MiniShop
                </a>

                {/* Toggle Button (for mobile view, static only) */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Content */}
                <div className="collapse navbar-collapse" id="navbarContent">

                    {/* Navigation Links */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to={'/'} className="nav-link ">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/products'} className="nav-link" href="#">Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/user-form'} className="nav-link" >User Form</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/user-list'} className="nav-link" >User List</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/contact'} className="nav-link" >Contact</NavLink>
                        </li>
                    </ul>

                    {/* Search Bar */}
                    <form className="d-flex me-3">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search products"
                            onChange={(e) => {
                                setsearch(e.target.value)
                                setskip(1)
                            }}
                        />
                        <button className="btn btn-outline-primary" type="submit">
                            Search
                        </button>
                    </form>

                    {/* Action Buttons */}
                    <div>
                        <Link to={'/cart'} className="btn btn-outline-secondary me-2">
                            Cart ({cart.length})
                        </Link>
                        {
                            user
                                ?
                                <Link to={'/'} onClick={() => dispatch(logOut())} className="btn btn-primary">
                                    LogOut ({user.role})
                                </Link>
                                :
                                <Link to={'/login'} className="btn btn-primary">
                                    Login
                                </Link>
                        }

                    </div>

                </div>
            </div>
        </nav>
    )
}

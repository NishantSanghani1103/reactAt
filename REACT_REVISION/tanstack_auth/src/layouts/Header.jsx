import { Link } from '@tanstack/react-router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../features/auth/userSclice'
import { useAuth } from '../hooks/useAuth'

export default function Header() {
    const user = useAuth()
    const dispatch = useDispatch()
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
                            <Link to={'/'} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/about'} className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/user/register'} className="nav-link">User Form</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/admin/list'} className="nav-link">User List</Link>
                        </li>
                        {/* <li className="nav-item">
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
                        </li> */}
                    </ul>

                    {/* Search Bar */}
                    <form className="d-flex me-3">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search products"

                        />
                        <button className="btn btn-outline-primary" type="submit">
                            Search
                        </button>
                    </form>

                    {/* Action Buttons */}
                    <div>
                        <Link to={'/cart'} className="btn btn-outline-secondary me-2">
                            Cart (0)
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

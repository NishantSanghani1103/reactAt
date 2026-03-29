import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm">
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
                            <Link to={'/'} className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/products'} className="nav-link" href="#">Shop</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Categories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
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
                        <button className="btn btn-outline-secondary me-2">
                            Cart
                        </button>
                        <button className="btn btn-primary">
                            Login
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    )
}

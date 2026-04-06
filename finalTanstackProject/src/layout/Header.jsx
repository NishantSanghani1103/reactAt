import { Link } from '@tanstack/react-router'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../features/auth/userSlice'


export default function Header() {
    const dispatch = useDispatch()
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <a className="navbar-brand fw-bold" href="/">MyShop</a>

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
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link " >Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link to={'/products'} className="nav-link">Products</Link>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/cart">Cart 🛒</a>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to={"/login"}>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/"} onClick={() => dispatch(logOut())}>LogOut</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to={"/admin/dashboard"}>Admin</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/user/dashboard"}>User</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

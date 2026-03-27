import React from 'react'
import { Link } from '@tanstack/react-router'
import { useAuth } from '../hooks/useAuth'
import { logOut } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';

export default function Header() {
    const user = useAuth()
    const dispatch = useDispatch()

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">

                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>

                        {/* <li>
                            <Link >Home</Link>
                        </li>*/}
                        <li>
                            <Link to="/about">About</Link>
                        </li> 
                        <li>
                            {
                                user
                                    ?
                                    <Link to="/" onClick={() => dispatch(logOut())}>LogOut</Link>
                                    :
                                    <Link to="/login">Login</Link>
                            }

                        </li>

                        {
                            !user
                            &&
                            <li>
                                <Link to={'/forgot-password'}>Forgot Password</Link>
                            </li>
                        }
                        
                        
                        <li>
                            <Link to="/admin/dashboard">Admin</Link>
                        </li>
                        <li>
                            <Link to="/user/dashboard">User</Link>
                        </li>
                        <li>
                            <Link to="/admin/userlist">User List</Link>
                        </li>
                        <li>
                            <Link to="/user/settings">User Settings</Link>
                        </li>
                    </ul>

                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav >
    )
}

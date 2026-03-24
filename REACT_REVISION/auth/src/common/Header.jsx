import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from '../slice/userSlice'

export default function Header() {
    const { user } = useSelector((store) => store.user)
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
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>

                        <li>
                            {
                                user
                                    ?
                                    <Link onClick={() => dispatch(logOut())} to="/">Logout</Link>
                                    :
                                    <Link to="/login">Login</Link>
                            }
                        </li>
                        {
                            user == null
                            &&
                            <li>

                                <Link to="/forgot">Forgot Password</Link>
                            </li>
                        }

                        <li>
                            <Link to="/admin">Admin</Link>
                        </li>
                        <li>
                            <Link to="/user">User</Link>
                        </li>
                        <li>
                            <Link to="/userlist">User List</Link>
                        </li>
                        <li>
                            <Link to="/setting">User Settings</Link>
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

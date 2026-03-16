import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CounterContext } from '../Data/CounterContext'

export default function Header() {
    const { count } = useContext(CounterContext)
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
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to={'/'} className="nav-link " aria-current="page" href="#" style={({ isActive }) => {
                                return {
                                    color: isActive && "blue"
                                }
                            }}>
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to={'/memo'} className="nav-link" href="#" style={({ isActive }) => {
                                return {
                                    color: isActive && "blue"
                                }
                            }}>
                                Memo
                            </NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            {/* <NavLink to={'/contact'} className="nav-link" href="#">
                                Contact
                            </NavLink> */}


                        </li>

                        <li className="nav-item">
                            <NavLink to={'/callback'} className="nav-link " aria-disabled="true" style={({ isActive }) => {
                                return {
                                    color: isActive && "blue"
                                }
                            }}>
                                UseCallBack
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <Link to={'/dashboard/login'} className="nav-link " aria-disabled="true" >
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/dashboard/profile'} className="nav-link " aria-disabled="true" style={({ isActive }) => {
                                return {
                                    color: isActive && "blue"
                                }
                            }}>
                                Profile
                            </NavLink>
                        </li>
                        <li className="nav-item d-flex">
                            <NavLink to={'/context'} className="nav-link " aria-disabled="true" style={({ isActive }) => {
                                return {
                                    color: isActive && "blue"
                                }
                            }}>
                                Cart Context ({count})
                            </NavLink>

                        </li>
                        <li className="nav-item d-flex">
                            <NavLink to={'/products'} className="nav-link " aria-disabled="true" style={({ isActive }) => {
                                return {
                                    color: isActive && "blue"
                                }
                            }}>
                                Products
                            </NavLink>

                        </li>
                        <li className="nav-item">
                            <NavLink to={'usememo'} className="nav-link " aria-disabled="true" style={({ isActive }) => {
                                return {
                                    color: isActive && "blue"
                                }
                            }} >
                                useMemo
                            </NavLink>
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

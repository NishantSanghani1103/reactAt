import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Dashboard() {
    return (
        <>
            <div className="container-fluid">
                <div className="row min-vh-100">

                    {/* Sidebar */}
                    <div className="col-md-3 col-lg-2 bg-dark text-white p-3">
                        <h4 className="text-center mb-4">My Dashboard</h4>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <Link to={'/dashboard'} className="nav-link text-white ">Home</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <NavLink className="nav-link text-white " to={'/dashboard/profile'}>Profile</NavLink>
                            </li>
                            <li className="nav-item mb-2">
                                <NavLink className="nav-link text-white " to={'/dashboard/login'}>Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white " >Logout</a>
                            </li>
                        </ul>
                    </div>

                    {/* Main Content */}

                    <div className="col-md-9 col-lg-10 p-4">
                        <Outlet />
                        {/* Top Navbar */}

                    </div>
                </div>
            </div>

        </>
    )
}

import { Link } from '@tanstack/react-router'
import React from 'react'

export default function Header() {
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
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                        <li className="nav-item">
                            <Link to={'/'}>Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to={'/sort'}>Sorting</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/globalfilter'}>Global Filter</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/coulmnfilter'}>Column Filter</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/pagination'}>Pagination</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/rowselection'}>Row Selection</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/columnorder'}>Coulmn Order</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/defaultfilter'}>Default Filter</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/filtercondition'}>Filter Condition</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/filterbutton'}>Filter Button Condition</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/filtermultiplevalue'}>Filter Multiple Value</Link>
                        </li>
                    </ul>

   
                </div>
            </div>
        </nav >
    )
}

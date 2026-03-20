import { Link } from '@tanstack/react-router'
import React from 'react'

export default function Header() {
    return (
        <>
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
                            <li>
                                <Link to={'/formvalidation'}>Form Validation and value</Link>
                            </li>
                            <li>
                                <Link to={'/formprectise'}>Form Prectise</Link>
                            </li>
                            <li>
                                <Link to={'/formsubscribe'}>Form Subscribe</Link>
                            </li>
                            <li>
                                <Link to={'/multiptypes'}>Form MultiTypes</Link>
                            </li>
                            <li>
                                <Link to={'/formlevalvalidation'}>Form Leval Validation</Link>
                            </li>
                            <li>
                                <Link to={'/asyncvalidation'}>Form Async Validation</Link>
                            </li>
                            <li>
                                <Link to={'/zodvalidation'}>Zod Validation</Link>
                            </li>
                        </ul>


                    </div>
                </div>
            </nav >
        </>
    )
}

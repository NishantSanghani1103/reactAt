import { Link } from '@tanstack/react-router'
import React from 'react'

import { useStore } from '@tanstack/react-store'
import { counterState } from '../stores/counterStore'

export default function Header() {
    const count = useStore(counterState, (store) => store.count)
    const unSubScribe = counterState.subscribe(() => {
        console.log(counterState.state.count);

        if (counterState.state.count <= 5) {
            localStorage.setItem("COUNT", JSON.stringify(counterState.state.count))
        }
        if (counterState.state.count > 5) {
            unSubScribe()
        }
    })

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
                            <li className="nav-item">
                                <Link to={'/'} className='text-black text-decoration-none'>Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to={'/about'} className='text-black text-decoration-none'>About</Link>
                            </li>

                            <li className="nav-item d-flex gap-3">
                                <Link to={'/countstate'} className='text-black text-decoration-none'>Count State ({count})</Link>
                                <button onClick={() => {
                                    counterState.setState((prev) => {
                                        return {
                                            ...prev,
                                            count: prev.count + 1
                                        }
                                    })
                                }}>+</button>
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
        </>
    )
}

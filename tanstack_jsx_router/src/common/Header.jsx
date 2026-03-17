import { Link } from '@tanstack/react-router'
import React from 'react'

export default function Header() {
    return (
        <>
            <ul>
                <li>
                    <Link to={'/about'}>About
                    </Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
                <li>
                    <Link to={'/products/5'}>Products</Link>
                </li>
                <li>
                    <Link to={'/product'}>Products Query</Link>
                </li>
                <li>
                    <Link to={'/login'}>Login</Link>
                </li>
                <li>
                    <Link to={'/dashboard'}>Dashboard</Link>
                </li>
                <li>
                    <Link to={'/logout'}>LogOut</Link>
                </li>
                <li>
                    <Link to={'/nav'}>Navigation Block</Link>
                </li>
                <li>
                    <Link to="/items/">Router Masking</Link>
                </li>
                <li>
                    <Link to="/blog/">UseMatches</Link>
                </li>
            </ul>
            <hr />
        </>
    )
}

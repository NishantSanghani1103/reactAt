import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PrivateRoutes() {
    return (
        <div>
            <h1>Private Routes</h1>
            <Outlet />
        </div>
    )
}

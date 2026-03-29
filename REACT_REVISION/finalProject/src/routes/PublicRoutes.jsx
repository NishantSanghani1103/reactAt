import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PublicRoutes() {
    return (
        <div>
            <h1>Public Routes</h1>
            <Outlet />
        </div>
    )
}

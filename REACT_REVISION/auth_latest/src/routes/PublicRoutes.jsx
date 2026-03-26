import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function PublicRoutes() {
    const { user } = useSelector((store) => store.user)
    if (user) {
        return <Navigate to={'/'} />
    }
    return (
        <>
        <div>PublicRoutes</div>
        <Outlet/>
        </>
    )
}

import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function PublicRoutes() {
    const { user } = useSelector((store) => store.user)
    if (user) {
        return user.role == "admin"
            ?
            <Navigate to={'/admin'} />
            :
            <Navigate to={'/user'} />
    }
    return (
        <>
            <h1>Hello</h1>
            <Outlet />
        </>
    )
}

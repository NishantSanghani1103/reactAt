import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

export default function PrivateRoutes({ userRole }) {
    const { user } = useSelector((store) => store.user)
    console.log(user);

    if (!user) {
        alert("Please Login First...!!")
        return <Navigate to={'/login'} />
    }

    if (!userRole.includes(user.role)) {
        return <Navigate to={'/unauthorized'} />
    }

    return (
        <div>
            <ToastContainer />
            <h1>Private Routes</h1>
            <Outlet />
        </div>
    )
}

import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoutes({ allowedRoles }) {
    const { user } = useSelector((store) => store.user)
    if (!user) {
        return <Navigate to="/login" />;
    }
    if (allowedRoles && !allowedRoles.includes(user.role)) {
       return <Navigate to="/login" />;
    }

    return (
        <>
            <div>PrivateRoutes</div>
            <Outlet />
        </>
    )
}

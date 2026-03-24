import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoutes({ userRoles }) {
    console.log(userRoles);

    const { user } = useSelector((store) => store.user)
    if (!user) {
        alert("Please Login First")
        return <Navigate to={'/'}/>
    }
    if (user == null || !userRoles.includes(user.role)) {
        return <Navigate to={'/unAuthorized'} />
    }

    return (
        <>
            <div>PrivateRoutes</div>
            <Outlet />
        </>
    )
}

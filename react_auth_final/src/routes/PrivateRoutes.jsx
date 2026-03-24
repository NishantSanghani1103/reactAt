import React from 'react'
import { useSelector, useStore } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoutes({ userRole }) {

    const { user } = useSelector((store) => store.user)
    console.log(user);

    if (!user) {
        return <Navigate to={'/login'} />
    }
    if (!userRole.includes(user.role)) {
        return <Navigate to={'/unauthorized'}/>
    }
    return (
        <>
            <div>PrivateRoutes</div>
            <Outlet />
        </>
    )
}

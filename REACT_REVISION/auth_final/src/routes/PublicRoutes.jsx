import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function PublicRoutes() {

    const { user } = useSelector((store) => store.user)

    if (user) {
        if (user.role == "admin") {
            return <Navigate to={'/admin'} />
        }
        if (user.role == "user") {
            return <Navigate to={'/user'} />
        }
    }
    // else {
    //     return <Navigate to={'/'}/>
    // }


    return (
        <>
        <div>PublicRoutes</div>
        <Outlet/>
        </>
    )
}

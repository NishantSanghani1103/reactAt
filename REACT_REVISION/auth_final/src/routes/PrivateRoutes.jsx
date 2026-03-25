import React from 'react'
import { useSelector, useStore } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoutes({ userRole }) {
    const { user } = useSelector((store) => store.user)
    console.log(user);
    
    if (!user) {
       return alert("Please Login First...!!")
    }
    if (!userRole.includes(user.role)) {
        return <Navigate to={'/unauthorized'}/>
    }
    return (
        <>
            <p>Private Routes</p>
            <Outlet />
        </>
    )
}

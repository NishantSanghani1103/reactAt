import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export default function UnAuthorized() {
    const { user } = useSelector((store) => store.user)
    const location = useLocation();
    console.log(location.pathname);
    
    if (!user) {
        return <Navigate to={'/'} />
    }
    // if (user.role === "admin" || user.role === "user") {
    //     return <Navigate to="/" />;
    // }

    return (
        <div>UnAuthorized for {user?.role}</div>
    )
}

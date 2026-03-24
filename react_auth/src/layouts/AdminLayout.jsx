import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom'

export default function AdminLayout() {
    const { user } = useSelector((store) => store.user)
    console.log(user);
    const navigate = useNavigate()
    useEffect(() => {
        if (!user || user.role !== "admin") {
            navigate("/");
        }
    }, [user, navigate])
    return (
        <Outlet />
    )
}

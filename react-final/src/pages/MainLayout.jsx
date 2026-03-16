import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../common/Header'

export default function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

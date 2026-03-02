import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import MainContext from '../MainContext'

export default function MainLayout() {
    return (
        <>
            <MainContext>
                <Header />
                <Outlet />
            </MainContext>
        </>
    )
}

import React from 'react'
import Header from './Header'
import { Outlet, useNavigation } from 'react-router-dom'

export default function MainLayout({ children }) {
    const { state } = useNavigation()
    console.log(state);


    return (
        <>
            <Header />
            {state === "loading" && <h2>Loading...</h2>}
            <Outlet />
        </>
    )
}

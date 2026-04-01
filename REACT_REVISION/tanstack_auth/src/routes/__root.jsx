/* eslint-disable react-refresh/only-export-components */
import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import Header from '../layouts/Header'

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

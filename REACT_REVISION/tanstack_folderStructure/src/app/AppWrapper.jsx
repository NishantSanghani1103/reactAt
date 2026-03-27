import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from '../routeTree.gen'

export default function AppWrapper() {
    const router = createRouter({ routeTree })
    const user = useAuth()
    return (
        <RouterProvider router={router} context={{ user }} />
    )
}

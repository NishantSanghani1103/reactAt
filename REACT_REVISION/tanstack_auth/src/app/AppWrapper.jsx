import { createRouter, RouterProvider } from '@tanstack/react-router'
import React from 'react'
import { routeTree } from "../routeTree.gen"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import AppProvider from './AppProvider'
import { useAuth } from '../hooks/useAuth'
const router = createRouter({ routeTree })
const client = new QueryClient()
export default function AppWrapper() {
    return (
        <AppProvider>
            <MainApp />
        </AppProvider>
    )
}

function MainApp() {
    const user = useAuth()
    console.log(user);

    return (
        <QueryClientProvider client={client}>
            <ReactQueryDevtools initialIsOpen={false} />
            <RouterProvider router={router} context={{ user }} />
        </QueryClientProvider>
    )
}
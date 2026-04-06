import { createRouter, RouterProvider } from '@tanstack/react-router'
import React from 'react'
import { routeTree } from '../routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import AppProvider from './AppProvider'
import { useAuth } from '../hooks/useAuth'
export default function AppWrapper() {
    return (
        <AppProvider>
            <Wrapper />
        </AppProvider>
    )
}

function Wrapper() {
    const router = createRouter({ routeTree })
    const client = new QueryClient()
    const user = useAuth()
    console.log(user);
    return (
        <QueryClientProvider client={client}>
            <RouterProvider router={router} context={{user}} />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

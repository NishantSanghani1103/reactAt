import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'

export default function AppWrapper({ children }) {
    const client = new QueryClient()
    return (
        <>
            <QueryClientProvider client={client}>
                <ReactQueryDevtools initialIsOpen={false} />
                {children}
            </QueryClientProvider>
        </>
    )
}

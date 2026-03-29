import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './app/Router.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import AppWrapper from './app/AppWrapper.jsx'
const client = new QueryClient()
createRoot(document.getElementById('root')).render(
  <AppWrapper>
    <RouterProvider router={router} />
  </AppWrapper>
)

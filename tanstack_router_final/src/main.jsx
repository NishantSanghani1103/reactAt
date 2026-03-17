import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { routeTree } from "./routeTree.gen.jsx";
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const router = createRouter({ routeTree })
const query = new QueryClient()
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={query}>
    <RouterProvider router={router}>
      <TanStackRouterDevtools initialIsOpen={false} position="bottom-right" />
    </RouterProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)

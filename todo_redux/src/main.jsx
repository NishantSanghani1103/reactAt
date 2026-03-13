import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainContext from './common/MainContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import User from './pages/User';
const route = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "user",
    element: <User />
  }
])
const client = new QueryClient()
createRoot(document.getElementById('root')).render(
  <MainContext >
    <QueryClientProvider client={client}>
      <RouterProvider router={route} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider >
  </MainContext>
)

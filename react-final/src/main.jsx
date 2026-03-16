import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './pages/MainLayout.jsx'
import ReactMemo from './topics/hooks/ReactMemo/ReactMemo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import UseMemo from './topics/hooks/UseMemo/UseMemo.jsx'
import UseCallBack from './topics/hooks/UseCallBack/UseCallBack.jsx'
import MainContext from './pages/MainContext.jsx'
import UseContext from './topics/hooks/UseContext/UseContext.jsx'
import Product from './topics/TanStack/UseQuery/Product.jsx'
import Form from './topics/hooks/FormValue/Form.jsx'
import UseReducer from './topics/hooks/UseReducer/UseReducer.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "memo",
        element: <ReactMemo />
      },
      {
        path: "usememo",
        element: <UseMemo />
      },
      {
        path: "callback",
        element: <UseCallBack />
      },
      {
        path: "context",
        element: <UseContext />
      },
      {
        path: "products",
        element: <Product />
      },
      {
        path: "form",
        element: <Form />
      },
      {
        path: "useReducer",
        element: <UseReducer />
      }
    ]
  }
])
const query = new QueryClient()
createRoot(document.getElementById('root')).render(
  <MainContext>
    <QueryClientProvider client={query}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </MainContext>
)

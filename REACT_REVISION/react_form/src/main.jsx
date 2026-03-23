import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './common/MainLayout.jsx'
import Shop from './pages/Shop.jsx'
import Form from './pages/Form.jsx'
import MainContext from './pages/MainContext.jsx'
import Cart from './pages/Cart.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/form",
        element: <Form />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <MainContext>
    <RouterProvider router={router} />
  </MainContext>
)

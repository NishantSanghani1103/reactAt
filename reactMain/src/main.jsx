import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './common/MainLayout.jsx'
import UserRegister from './pages/UserRegister/UserRegister.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <UserRegister />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

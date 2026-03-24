import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PublicRoutes from './routes/PublicRoutes.jsx'
import Login from './pages/Login.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MainLayout from './common/MainLayout.jsx'
import Home from './pages/Home.jsx'
import PrivateRoutes from './routes/PrivateRoutes.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import MainContext from './common/MainContext.jsx'
import UserDashboard from './pages/UserDashboard.jsx'
import Unauthorized from './pages/Unauthorized.jsx'
import UserList from './pages/UserList.jsx'
import About from './pages/About.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },

      // public routes....

      {
        element: <PublicRoutes />,
        children: [
          {
            path: "/login",
            element: <Login />
          }
        ]
      },

      // Private Routes For The Admin
      {
        element: <PrivateRoutes userRole={["admin"]} />,
        children: [
          {
            path: "/admin",
            element: <AdminDashboard />
          },
          {
            path: "/userList",
            element: <UserList />
          }
        ]
      },

      // Private Routes For The User

      {
        element: <PrivateRoutes userRole={["user"]} />,
        children: [
          {
            path: "/user",
            element: <UserDashboard />
          }
        ]
      },

      {
        path: "/unauthorized",
        element: <Unauthorized />
      },
      {
        path: "/about",
        element: <About />
      }

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <MainContext>
    <RouterProvider router={router} />
  </MainContext>
)

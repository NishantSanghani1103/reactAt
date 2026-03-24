import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './common/MainLayout';
import App from './App';
import User from './pages/User';
import UserProfile from './pages/UserProfile';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import MainContext from './common/MainContext';
import AdminLayout from './layouts/AdminLayout';
import PublicRoutes from './routes/public/PublicRoutes';
import PrivateRoutes from './routes/private/PrivateRoutes';
import AdminDashboard from './routes/private/AdminDashboard';
import UserDashboard from './routes/private/UserDashboard';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>Page Not Found</h1>,
    children: [
      {
        // public Routes 

        path: "/",
        element: <PublicRoutes />,
        children: [
          {
            path: "/login",
            element: <Login />
          }
        ]
      },

      //private admin routes

      {
        element: <PrivateRoutes allowedRoles={["admin"]} />,
        children: [
          {
            path: "/admin",
            element: <AdminDashboard />
          }
        ]
      },


      //private user Routes

      {
        element: <PrivateRoutes allowedRoles={["user"]} />,
        children: [
          {
            path: "/user",
            element: <UserDashboard />
          }
        ]
      }
    ]
  },


  // {
  //   path: "/",
  //   element: <MainLayout />,
  //   errorElement: <h1>Page Not Found</h1>,
  //   children: [
  //     {
  //       index: true,
  //       element: <App />
  //     },
  //     {
  //       path: "/user",
  //       element: <User />
  //     },
  //     {
  //       path: "/userprofile",
  //       element: <UserProfile />
  //     },
  //     {
  //       path: "/admin",
  //       element: <AdminLayout />,
  //       children: [
  //         {
  //           index: true,
  //           element: <Admin />
  //         },
  //         {
  //           path: "login",
  //           element: <Login />
  //         }
  //       ]
  //     },

  //     {
  //       path: "/register",
  //       element: <Register />
  //     }
  //   ]
  // }
])
createRoot(document.getElementById('root')).render(
  <MainContext>
    <RouterProvider router={router} />
  </MainContext>
)

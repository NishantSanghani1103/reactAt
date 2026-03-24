import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './common/MainLayout';
import Home from './pages/Home';
import PublicRoutes from './routes/PublicRoutes';
import About from './pages/About';
import PrivateRoutes from './routes/PrivateRoutes';
import AdminDashboard from './pages/adminPages/AdminDashboard';
import Login from './pages/publicPages/Login';
import UserDashboard from './pages/userPages/UserDashboard';
import MainContext from './common/MainContext';
import UnAuthorized from './pages/publicPages/Un';
import UserList from './pages/adminPages/UserList';
import Setting from './pages/userPages/Setting';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <PublicRoutes />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/about",
            element: <About />
          },
          {
            path: "/login",
            element: <Login />
          }
        ]
      },

      // private routes for the admin

      {
        element: <PrivateRoutes userRoles={["admin"]} />,
        children: [
          {
            path: "/admin",
            element: <AdminDashboard />
          },
          {
            path: "/userlist",
            element: <UserList />
          }
        ]
      },

      //private routes for the user

      {
        element: <PrivateRoutes userRoles={["user"]} />,
        children: [
          {
            path: "/user",
            element: <UserDashboard />
          },
          {
            path: "/setting",
            element: <Setting />
          }
        ]
      },
      {
        path: "/unAuthorized",
        element: <UnAuthorized />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <MainContext>
    <RouterProvider router={router} />
  </MainContext>
)

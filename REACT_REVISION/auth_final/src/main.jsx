import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './common/MainLayout';
import Home from './pages/publicPages/Home';
import About from './pages/publicPages/About';
import Login from './pages/publicPages/Login';
import PrivateRoutes from './routes/PrivateRoutes';
import AdminDashBoard from './pages/adminPages/AdminDashBoard';
import UserList from './pages/adminPages/UserList';
import UserDashboard from './pages/userPages/UserDashboard';
import MainContext from './common/MainContext';
import UnAuthorized from './pages/publicPages/UnAuthorized';
import UserSetting from './pages/userPages/UserSetting';
import PublicRoutes from './routes/PublicRoutes';
import ForgotPassword from './pages/publicPages/ForgotPassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },

      {
        element: <PublicRoutes />,
        children: [
          {
            path: "/login",
            element: <Login />
          },
          {
            path: "/forgot",
            element: <ForgotPassword />
          }


        ]
      },
      {
        path: "/unauthorized",
        element: <UnAuthorized />
      },

      // Private Routes For Admin

      {
        element: <PrivateRoutes userRole={["admin"]} />,
        children: [
          {
            path: "/admin",
            element: <AdminDashBoard />
          },
          {
            path: "/userlist",
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
          },
          {
            path: "/user-setting",
            element: <UserSetting />
          }
        ]
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <MainContext>
    <RouterProvider router={router} />
  </MainContext>
)

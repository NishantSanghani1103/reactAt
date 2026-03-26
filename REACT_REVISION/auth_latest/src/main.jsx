import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './common/MainLayout.jsx';
import Home from './pages/publicPages/Home.jsx';
import About from './pages/publicPages/About.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';
import AdminDashboard from './pages/PrivatePages/AdminPages/AdminDashboard.jsx';
import UserList from './pages/PrivatePages/AdminPages/UserList.jsx';
import Login from './pages/publicPages/Login.jsx';
import MainContext from './common/MainContext.jsx';
import UserDashboard from './pages/PrivatePages/UserPages/UserDashboard.jsx';
import UserSetting from './pages/PrivatePages/UserPages/UserSetting.jsx';
import UnAuthorized from './pages/publicPages/UnAuthorized.jsx';
import PublicRoutes from './routes/PublicRoutes.jsx';
import ForgotPassword from './pages/publicPages/ForgotPassword.jsx';
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
        path: "/unauthorized",
        element: <UnAuthorized />
      },
      {
        element: <PublicRoutes />,
        children: [
          {
            path: "/login",
            element: <Login />
          },
          {
            path: "/forgot-password",
            element: <ForgotPassword />
          }
        ]
      },
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

      {
        element: <PrivateRoutes userRoles={["user"]} />,
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

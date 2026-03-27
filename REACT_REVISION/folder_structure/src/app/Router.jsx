import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import PublicRoutes from "../routes/PublicRoutes";
import Login from "../features/auth/pages/Login";
import Contact from "../pages/Contact";
import PrivateRoutes from "../routes/PrivateRoutes";
import AdminDashboard from "../features/admin/pages/AdminDashboard";
import UserDashboard from "../features/user/pages/UserDashboard";
import Unauthorized from "../pages/Unauthorized";
import Admin from "../features/admin/pages/Admin";
import User from "../features/user/pages/User";
import UserList from "../features/admin/pages/UserList";
import UserSetting from "../features/user/pages/UserSetting";
import ForgotPassword from "../features/auth/pages/ForgotPassword";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <App />,
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: '/unauthorized',
                element: <Unauthorized />
            },

            // public routes 

            {
                element: <PublicRoutes />,
                children: [
                    {
                        path: '/forgot-password',
                        element: <ForgotPassword />
                    },
                    {
                        path: "/login",
                        element: <Login />
                    }
                ]
            },


            // private routes for the admin.

            {
                element: <PrivateRoutes userRoles={["admin"]} />,
                children: [
                    {
                        path: "/admin",
                        element: <Admin />,
                        children: [
                            {
                                path: "dashboard",
                                element: <AdminDashboard />
                            },
                            {
                                path: "user-list",
                                element: <UserList />
                            }
                        ]
                    }
                ]
            },

            // private rotues for the user.

            {
                element: <PrivateRoutes userRoles={["user"]} />,
                children: [
                    {
                        path: "/user",
                        element: <User />,
                        children: [
                            {
                                path: "dashboard",
                                element: <UserDashboard />
                            },
                            {
                                path: "setting",
                                element: <UserSetting />
                            }
                        ]
                    }
                ]
            }
        ]
    }
])
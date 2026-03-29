import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PublicRoutes from "../routes/PublicRoutes";
import AdminDashboard from "../features/admin/pages/AdminDashboard";
import Product from "../pages/Product";
import Home from "../features/home/pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/products",
                element: <Product />
            },
            {
                element: <PublicRoutes />,
                children: [
                    {
                        path: "/admin",
                        element: <AdminDashboard />
                    }
                ]
            }
        ]
    }
])
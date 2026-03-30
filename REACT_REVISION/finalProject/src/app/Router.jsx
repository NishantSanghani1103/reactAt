import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PublicRoutes from "../routes/PublicRoutes";
import AdminDashboard from "../features/admin/pages/AdminDashboard";
import Product from "../pages/Product";
import Home from "../features/home/pages/Home";
import ProductDetails from "../features/home/pages/ProductDetails";
import Cart from "../features/cart/pages/Cart";
import Login from "../features/auth/pages/Login";
import PrivateRoutes from "../routes/PrivateRoutes";
import UnAuthorized from "../pages/UnAuthorized";
import Contact from "../pages/Contact";
import ProductListing from "../features/products/pages/ProductListing";

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
                element: <ProductListing />
            },
            {
                path: "/products/:id",
                element: <ProductDetails />
            },
            {
                path: "/unauthorized",
                element: <UnAuthorized />
            },
            {
                path: "/contact",
                element: <Contact />
            },

            // private routes for the user

            {
                element: <PrivateRoutes userRole={["user"]} />,
                children: [
                    {
                        path: "/cart",
                        element: <Cart />
                    },
                ]
            },

            // public routes

            {
                element: <PublicRoutes />,
                children: [
                    {
                        path: "/login",
                        element: <Login />
                    },
                ]
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
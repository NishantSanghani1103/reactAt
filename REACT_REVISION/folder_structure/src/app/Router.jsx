import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import PublicRoutes from "../routes/PublicRoutes";
import Login from "../features/auth/pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <App />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                element: <PublicRoutes />,
                children:[
                    {
                        path:"/login",
                        element:<Login/>
                    }
                ]
            }
        ]
    }
])
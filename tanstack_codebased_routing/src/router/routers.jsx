import { createRootRoute, createRoute, Outlet } from "@tanstack/react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const rootRouter = createRootRoute({
    component: () => {
        return (
            <>
                <h2>My App Layout</h2>
                <Outlet />
            </>
        )
    }
})

export const homeRoute = createRoute({
    getParentRoute: () => rootRouter,
    path: "/",
    component: Home
})

export const aboutRoute = createRoute({
    getParentRoute: () => rootRouter,
    path: "/about",
    component: About
})
export const contactRoute = createRoute({
    getParentRoute: () => rootRouter,
    path: "/contact",
    component: Contact
})

export const routeTree = rootRouter.addChildren([
    homeRoute,
    aboutRoute,
    contactRoute
])
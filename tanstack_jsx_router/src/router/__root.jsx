import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import Header from "../common/Header";
import NotFound from "../common/NotFound";

export const Route = createRootRoute({
    component: () => {
        return (
            <>
                <Header />
                <Outlet />
            </>
        )

    },
    notFoundComponent: NotFound
})
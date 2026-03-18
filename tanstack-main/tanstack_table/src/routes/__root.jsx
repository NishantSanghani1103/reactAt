import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../common/Header";

export const Route = createRootRoute({
    component: () => {
        return (
            <>
                <Header />
                <Outlet />
            </>
        )
    }
})
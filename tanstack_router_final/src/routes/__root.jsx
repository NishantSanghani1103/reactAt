import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import Header from "../common/Header";
import NotFound404 from "../common/NotFound404";


export const Route = createRootRoute({
    component: () => {
        return (
            <>

                <Header />
                <Outlet />
            </>
        )

    },
    notFoundComponent: NotFound404

})
import { redirect } from "@tanstack/react-router";

export const requireRole = (role) => ({ context }) => {

    const user = context.user;

    console.log("CHECKING ROLE:", user); // debug

    if (!user) {
        alert("Please Login First...!!")
        throw redirect({ to: "/login" });
    }

    if (user.role != role) {
        throw redirect({ to: "/unauthorized" });
    }
};
import { redirect } from "@tanstack/react-router";
export const requiredRoles = (role) => ({ context }) => {
    console.log(context);
    console.log(role);
    if (context.user == null) {
        return redirect({ to: "/login" })
    }
    
    if (context.user.role != role) {
        return redirect({ to: "/unauthorized" })
    }

}
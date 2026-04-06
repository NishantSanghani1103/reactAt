import { redirect } from "@tanstack/react-router";
export const chackUserRole = (role) => ({ context }) => {
    console.log(role, context);
    const { user } = context
    console.log(user);
    if (!user) {
        alert("Please Login First...!!")
        throw redirect({to:"/login"})
    }
    if(user.role!=role){
        throw redirect({to:"/unauthorized"})
    }
}
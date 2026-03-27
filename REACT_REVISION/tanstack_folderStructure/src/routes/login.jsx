import { createFileRoute, redirect } from '@tanstack/react-router'
import Login from '../features/auth/pages/Login'
import { requireRole } from '../utils/requireRoles'

export const Route = createFileRoute('/login')({
    beforeLoad: ({ context }) => {
        console.log(context);

        if (context.user != null) {
            return redirect({ to: "/" })
        }
    },
    component: Login,
})


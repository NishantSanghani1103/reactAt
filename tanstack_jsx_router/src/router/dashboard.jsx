import { createFileRoute, redirect } from '@tanstack/react-router'
import { auth } from '../config/auth'

export const Route = createFileRoute('/dashboard')({
  beforeLoad: () => {
    if (!auth.isAuthenticated) {
      throw redirect({
        to: "/login"
      })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard"!</div>
}

 
import { createFileRoute, redirect } from '@tanstack/react-router'
import UserDashboard from '../../features/user/pages/UserDashboard'
import { requireRole } from '../../utils/requireRoles'

export const Route = createFileRoute('/user/dashboard')({
  beforeLoad: requireRole("user"),
  component: UserDashboard,
})



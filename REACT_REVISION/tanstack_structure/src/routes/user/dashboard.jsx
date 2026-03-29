import { createFileRoute } from '@tanstack/react-router'
import UserDashboard from '../../features/user/pages/UserDashboard'

export const Route = createFileRoute('/user/dashboard')({
  component: UserDashboard,
})


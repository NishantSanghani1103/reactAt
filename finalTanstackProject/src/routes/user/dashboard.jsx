import { createFileRoute } from '@tanstack/react-router'
import UserDashboard from '../../features/user/pages/UserDashboard'
import { chackUserRole } from '../../utils/checkUserRole'

export const Route = createFileRoute('/user/dashboard')({
  beforeLoad:chackUserRole("user"),
  component: UserDashboard,
})



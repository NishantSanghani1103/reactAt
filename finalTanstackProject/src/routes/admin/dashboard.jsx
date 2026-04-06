import { createFileRoute } from '@tanstack/react-router'
import AdminDashboard from '../../features/admin/pages/AdminDashboard'
import { chackUserRole } from '../../utils/checkUserRole'

export const Route = createFileRoute('/admin/dashboard')({
  beforeLoad:chackUserRole("admin"),
  component: AdminDashboard,
})

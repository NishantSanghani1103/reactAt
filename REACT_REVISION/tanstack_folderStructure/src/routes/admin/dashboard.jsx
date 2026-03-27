 
import { createFileRoute } from '@tanstack/react-router'
import { redirect } from 'react-router-dom'
import { requireRole } from '../../utils/requireRoles'
import AdminDashboard from '../../features/admin/pages/AdminDashboard'

export const Route = createFileRoute('/admin/dashboard')({
  beforeLoad: requireRole("admin"),
  component: AdminDashboard,
})


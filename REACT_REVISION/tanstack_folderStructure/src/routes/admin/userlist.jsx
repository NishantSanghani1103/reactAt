 
import { createFileRoute } from '@tanstack/react-router'
import { requireRole } from '../../utils/requireRoles'
import UserList from '../../features/admin/pages/UserList'

export const Route = createFileRoute('/admin/userlist')({
  beforeLoad: requireRole("admin"),
  component: UserList,
})


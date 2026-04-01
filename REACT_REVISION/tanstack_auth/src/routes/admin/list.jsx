import { createFileRoute } from '@tanstack/react-router'
import UserList from '../../features/admin/pages/UserList'
import { requiredRoles } from '../../utils/checkUserRole'

export const Route = createFileRoute('/admin/list')({
  beforeLoad: requiredRoles("admin"),
  component: UserList,
})



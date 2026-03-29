import { createFileRoute } from '@tanstack/react-router'
import UserList from '../../features/admin/pages/UserList'

export const Route = createFileRoute('/admin/list')({
  component: UserList,
})


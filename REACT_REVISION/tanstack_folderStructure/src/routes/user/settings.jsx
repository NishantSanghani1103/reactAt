 
import { createFileRoute } from '@tanstack/react-router'
import UserSettings from '../../features/user/pages/UserSettings'
import { requireRole } from '../../utils/requireRoles'

export const Route = createFileRoute('/user/settings')({
  beforeLoad:requireRole("user"),
  component: UserSettings,
})


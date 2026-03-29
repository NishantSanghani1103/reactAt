import { createFileRoute } from '@tanstack/react-router'
import UserSettings from '../../features/user/pages/UserSettings'

export const Route = createFileRoute('/user/settings')({
  component: UserSettings,
})


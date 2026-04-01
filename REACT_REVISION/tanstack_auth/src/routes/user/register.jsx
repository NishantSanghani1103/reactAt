
import { createFileRoute } from '@tanstack/react-router'

import { requiredRoles } from '../../utils/checkUserRole'
import UserRegister from '../../features/user/pages/userRegister'

export const Route = createFileRoute('/user/register')({
  beforeLoad: requiredRoles("user"),
  component: UserRegister,
})


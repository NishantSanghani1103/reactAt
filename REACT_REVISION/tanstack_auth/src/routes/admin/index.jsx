/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router'
import { requiredRoles } from '../../utils/checkUserRole'

export const Route = createFileRoute('/admin/')({

  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/"!</div>
}

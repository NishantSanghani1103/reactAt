import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/items/$id')({
  component: RouteComponent,
})

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  const { id } = Route.useParams()
  return <div>Hello "/items/{id}"!</div>
}

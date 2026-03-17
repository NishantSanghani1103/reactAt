import { createFileRoute } from '@tanstack/react-router'
import Breadcrumbs from '../../common/Breadcrumbs'

export const Route = createFileRoute('/blog/$id')({
  component: RouteComponent,
})

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  const { id } = Route.useParams()
  return (
    <>
      <Breadcrumbs />
      <div>Hello "/blog/{id}"!</div>
    </>
  )
}

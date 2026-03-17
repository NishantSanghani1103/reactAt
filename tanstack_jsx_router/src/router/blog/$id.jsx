import { createFileRoute } from '@tanstack/react-router'
import Breadcrumbs from '../../common/Breadcrumbs'

export const Route = createFileRoute('/blog/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()

  return (
    <>
     <Breadcrumbs />
      <div>
        Hello "/blog/{id}"!
      </div>
    </>
  )
}

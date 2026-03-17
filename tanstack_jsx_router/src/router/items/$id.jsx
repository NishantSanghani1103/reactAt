import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/items/$id')({
  component: RouteComponent,
  
})

function RouteComponent() {
  const { id } = Route.useParams()
  return <div>
    <p>Hello "/items/{id}"!</p>
    <Link to={"/items/"}>Go Back</Link>
  </div>
}

import { createFileRoute, Link } from '@tanstack/react-router'
import Breadcrumbs from '../../common/Breadcrumbs'

export const Route = createFileRoute('/blog/')({
  component: RouteComponent,
})

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  const blog = [
    { id: 101, title: "React" },
    { id: 102, title: "javaScript" }
  ]
  return (
    <>
      <Breadcrumbs />
      <div>
      
        <ul>
          {
            blog.map((value, index) => <li key={index}> <Link params={{ id: value.id }} to={`/blog/$id`}>{value.title}</Link></li>)
          }
        </ul>
      </div>
    </>
  )
}

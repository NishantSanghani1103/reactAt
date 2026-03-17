import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import Breadcrumbs from '../../common/Breadcrumbs'

export const Route = createFileRoute('/blog/')({
  component: RouteComponent,
})

function RouteComponent() {
  const posts = [
    { id: 101, title: 'React Tips' },
    { id: 102, title: 'TanStack Router Guide' },
    { id: 103, title: 'JavaScript Tricks' },
  ]

  return (
    <>
    <Breadcrumbs />
      <div>
        <h3>Blog Data</h3>
        <ul>
          {
            posts.map((value, index) => <li key={index}>
              <Link to={`/blog/$id`} params={{ id: value.id }} mask={{to:"/blog"}}>{value.title}</Link>
            </li>)
          }
        </ul>
        <Outlet/>
      </div>
    </>
  )
}

import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/items/')({
  component: RouteComponent,
})

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  const items = [
    { id: 1, title: "Mobile" },
    { id: 2, title: "Leptop" }
  ]
  return (
    <>
      <div>
        <p>Hello "/items/"!</p>
        <ul>
          {
            items.map((value, index) => <li key={index}><Link to={'/items/$id'} params={{ id: value.id }} mask={{
              to: "/items"
            }}>{value.title}</Link></li>)
          }
        </ul>
        <Outlet />
      </div>
    </>
  )
}

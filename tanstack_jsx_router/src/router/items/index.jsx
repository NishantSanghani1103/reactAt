import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/items/')({
  component: RouteComponent,
})

function RouteComponent() {
  const ary = [1, 2, 3]
  return (
    <>
      <div>
        <p>Hello "/items/"!</p>
        <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {
            ary.map((value, index) => <Link
              key={index}
              to={"/items/$id"}
              params={{ id: value }}
              mask={{
                to: '/items',
              }}
            >{value}</Link>)
          }
        </ul>
        <Outlet />
      </div>
    </>
  )
}

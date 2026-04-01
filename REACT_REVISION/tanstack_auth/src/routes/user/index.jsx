import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/user/')({
  component: RouteComponent,
})

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <>
      <div>Hello "/userform/"!</div>
      <Outlet />
    </>
  )
}

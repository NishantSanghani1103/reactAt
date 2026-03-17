/* eslint-disable react-refresh/only-export-components */
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { auth } from '../data/auth'

export const Route = createFileRoute('/logout')({
  component: RouteComponent,
})



function RouteComponent() {
  const navigate = useNavigate()
  const handleLogOut = () => {
    auth.logOut()
    navigate({
      to:"/login"
    })
  }
  return (
    <>
      <div>Hello "/logout"!</div>
      <button onClick={handleLogOut}>Logout</button>
    </>
  )
}

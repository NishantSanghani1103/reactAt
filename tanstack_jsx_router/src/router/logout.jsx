import { createFileRoute, Navigate, redirect, useNavigate } from '@tanstack/react-router'
import { auth } from '../config/auth'

export const Route = createFileRoute('/logout')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  const handleLogOut = () => {
    auth.logOut()
    navigate({
      to: "/login"
    })
  }
  return (
    <>
      <div>
        <p>Hello "/logout"!</p>
        <button onClick={handleLogOut}>Log Out</button>
      </div>
    </>
  )
}

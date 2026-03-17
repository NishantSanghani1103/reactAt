import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { auth } from '../data/auth'
import { useEffect } from 'react'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  const navigate = useNavigate()

  const handleLogin = () => {
    auth.login()
    setTimeout(() => {

      navigate({
        to: "/dashboard"
      })
    }, 3000)
    clearTimeout()
  }

  return (
    <>
      <div>
        <p>Hello "/login"!</p>
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  )
}

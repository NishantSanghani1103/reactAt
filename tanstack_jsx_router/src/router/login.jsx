import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { auth } from '../config/auth'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  const handleLogin = () => {
    auth.login()
    navigate({
      to:"/dashboard"
    })
  }
  return (
    <>
      <div>
        <h5>  Hello "/login"!</h5>
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  )
}

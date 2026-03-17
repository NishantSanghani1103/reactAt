/* eslint-disable react-refresh/only-export-components */
import { createFileRoute, redirect } from '@tanstack/react-router'
import { auth } from '../data/auth'

export const Route = createFileRoute('/dashboard')({
  beforeLoad: () => {
    if(!auth.isAuthenticate){
      return redirect({
        to:"/login"
      })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard"!</div>
}

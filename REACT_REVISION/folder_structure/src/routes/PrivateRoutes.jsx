import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoutes({ userRoles }) {
  const { user } = useSelector((store) => store.auth)
  console.log(user);

    if (!user) {
      alert("Please Login First....!!")
      return <Navigate to={'/'} />
    }
  if (!userRoles.includes(user.role)) {
    return <Navigate to={'/unauthorized'} />
  }
  return (
    <div>
      <h1>Private Routes</h1>
      <Outlet />
    </div>
  )
}

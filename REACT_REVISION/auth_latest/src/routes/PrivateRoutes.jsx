import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoutes({ userRoles }) {
  const { user } = useSelector((store) => store.user)
  if (user) {
    if (!userRoles.includes(user.role)) {
      return <Navigate to={"/unauthorized"} />
    }
  }
  else {
    alert("Please Login First...!!")
    return <Navigate to={'/'} />
  }
  return (
    <>
      <div>PrivateRoutes</div>
      <Outlet />
    </>
  )
}

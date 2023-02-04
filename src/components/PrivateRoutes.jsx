import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoutes() {
    const loggedIn=false

  return loggedIn?<Outlet />:<Navigate to="/sign-in" />

}

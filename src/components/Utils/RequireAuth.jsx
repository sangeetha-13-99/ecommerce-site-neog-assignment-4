import React, { Fragment } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuthContext } from '../../store/authContext'

export const RequireAuth = ({children}) => {
  const {authData:{isLoggedIN}}=useAuthContext();
  const {pathname}=useLocation();
  return (
    isLoggedIN?<Fragment>
{children}
    </Fragment>:<Navigate to="/login" state={pathname}/>
  )
}

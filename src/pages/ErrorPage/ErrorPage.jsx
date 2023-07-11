import React from 'react'
import { useLocation } from 'react-router-dom'

export const ErrorPage = () => {
    const {state}=useLocation();
  return (
    <div>
        Oops getting {state.status} {state.message} error
    </div>
  )
}

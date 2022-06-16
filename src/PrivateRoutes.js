import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
export default function PrivateRoutes({children}) {
    const location=useLocation()
    
        const auth=JSON.parse(localStorage.getItem('educationsite'))
  return (
    <div>
        {
            auth?.role?.includes('کاربر عادی') ? (
                <Outlet />
            ):(
                <Navigate to='/' state={{from:location}} replace />
            )
        }
    </div>
  )
}

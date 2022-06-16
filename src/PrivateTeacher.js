import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
export default function PrivateTeacher({children}) {
    const location=useLocation()
    
        const auth=JSON.parse(localStorage.getItem('educationsite'))
        console.log(auth);
  return (
    <div>
        {
            auth?.role?.includes('مدرس')  ? (
                <Outlet />
            ):(
                <Navigate to='/' state={{from:location}} replace />
            )
        }
    </div>
  )
}

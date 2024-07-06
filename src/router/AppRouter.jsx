import React from 'react'
import { Navigate, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { PrincipalScreenRoutes } from '../PrincipalScreen/routes/PrincipalScreenRoutes'
import { PrincipalScreens } from '../PrincipalScreen/pages/PrincipalScreens'
import { AuthPages } from '../auth/pages/AuthPages'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { useSelector } from 'react-redux'
import {useCheckAuth} from '../hooks/useCheckAuth'
import { CheckingAuth } from '../ui/components/CheckingAuth'




export const AppRouter = () => {

  
  useCheckAuth();



    const router = createBrowserRouter([
        {
            path: '/auth/*',
            element: <CheckingAuth/>,
            children: AuthRoutes,
        },
        {
          path: '/',
          element: <PrincipalScreens/>,
          children: PrincipalScreenRoutes,
          
          
        }
    ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
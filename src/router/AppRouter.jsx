import React from 'react'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PrincipalScreenRoutes } from '../PrincipalScreen/routes/PrincipalScreenRoutes'
import { PrincipalScreens } from '../PrincipalScreen/pages/PrincipalScreens'
import { AuthPages } from '../auth/pages/AuthPages'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import {useCheckAuth} from '../hooks/useCheckAuth'





export const AppRouter = () => {

  
  useCheckAuth();



    const router = createBrowserRouter([
        {
            path: '/auth/*',
            element: <AuthPages/>,
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
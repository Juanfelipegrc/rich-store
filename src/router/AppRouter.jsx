import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { PrincipalScreenRoutes } from '../PrincipalScreen/routes/PrincipalScreenRoutes'
import { PrincipalScreens } from '../PrincipalScreen/pages/PrincipalScreens'
import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { ProductProvider } from '../PrincipalScreen/context/ProductProvider'
import { CartProvider } from '../PrincipalScreen/cart/context/CartProvider'
import { SearchProvider } from '../PrincipalScreen/pages/context/SearchProvider'

export const AppRouter = () => {

    const router = createBrowserRouter([
        {
            path: '/login',
            element: <PublicRoutes> <LoginPage/> </PublicRoutes>,
        },
        {
          path: '/',
          element: <PrivateRoutes>
                      <CartProvider>
                        <ProductProvider>
                          <SearchProvider>
                            <PrincipalScreens/>
                          </SearchProvider>
                        </ProductProvider>
                      </CartProvider>
                    </PrivateRoutes>,
          children: PrincipalScreenRoutes,
          
          
        }
    ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
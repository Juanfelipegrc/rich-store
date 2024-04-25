import React from 'react'
import { Outlet } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './auth/context/AuthProvider'
import { CartProvider } from './PrincipalScreen/cart/context/CartProvider'
import { ProductProvider } from './PrincipalScreen/context/ProductProvider'

export const TiendasApp = () => {
  
  return (
    <>
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>

    </>
  )
}

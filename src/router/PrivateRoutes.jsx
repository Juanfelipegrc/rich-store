import React, { useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoutes = ({children}) => {

    const {logged} = useContext(AuthContext);
    const {pathname} = useLocation();
    useEffect(() => {
      if(pathname != '/product-individual'){
        localStorage.setItem('lastPath', JSON.stringify(pathname))
      }
    }, [pathname])
    

  return (logged) ? children : <Navigate to={'/login'}/>
}

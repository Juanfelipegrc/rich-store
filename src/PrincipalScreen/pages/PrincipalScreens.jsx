import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Navbar } from '../../ui/components/Navbar'
import { useSelector } from 'react-redux';

export const PrincipalScreens = () => {
    
  const {status} = useSelector(state => state.auth);
  
  if(status === 'not-authenticated'){
    return <Navigate to='/auth/login'/>
  };

  return (
    <>  
        <Navbar/>
        <div className='container'>

            <Outlet/>

        </div>
    
    </>
  )
}

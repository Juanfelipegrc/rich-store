import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { Navbar } from '../../ui/components/Navbar'
import { useSelector } from 'react-redux'

export const AuthPages = () => {
    


  const {status} = useSelector(state => state.auth);
  
  if(status === 'authenticated'){
    return <Navigate to='/home'/>
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

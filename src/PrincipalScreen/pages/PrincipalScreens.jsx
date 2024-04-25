import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../ui/components/Navbar'

export const PrincipalScreens = () => {
    

  return (
    <>  
        <Navbar/>
        <div className='container'>

            <Outlet/>

        </div>
    
    </>
  )
}

import React from 'react'
import { AuthPages } from '../../auth/pages/AuthPages';
import { useCheckAuth } from '../../hooks';

export const CheckingAuth = () => {

  const status = useCheckAuth()



  

  return (

    <>

      {
        status === 'checking' 
        ? 
          <div className='container-loading'>
            <div className='container-loading-2'>
            </div>
          </div> 

        : 
          <AuthPages/>
      }
    
      
    </>
  )
}

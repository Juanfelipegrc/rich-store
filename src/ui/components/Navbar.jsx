import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'

export const Navbar = () => {
    
    const {logout, user} = useContext(AuthContext);

    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login',{
            replace: true,
        })
    }



  return (
    <nav className='navbar-personalized'>

        <div className='container-navbar'>  
            <div className='container-navbar-1'>
                <NavLink to={'/home'}>
                    Home
                </NavLink>
                <NavLink to={'/products'}>
                    Products
                </NavLink>
                <NavLink to={'/contact'}>
                    Contact
                </NavLink>
            </div>


            <div>
                <a href="/home">

                    <img src="../../../assets/logotipo.png" alt="logotipo" className='logo-navbar'/>

                </a>
            </div>


            <div className='container-navbar-2'>
                <NavLink to={'/cart'}>
                    Cart
                </NavLink>
                <NavLink to={'/search'}>
                    Search
                </NavLink>
                <span className='usuario-name'>
                    {user?.name}
                </span>
                <button onClick={onLogout} className='logout-button-navbar'>
                    Logout
                </button>
            </div>
        </div>
    
    </nav>
  )
}

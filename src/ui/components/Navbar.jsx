import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'
import 'animate.css'

export const Navbar = () => {
    
    const {logout, user} = useContext(AuthContext);

    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login',{
            replace: true,
        })
    }

    const [navbarView, setNavbarView] = useState(false)

    const {pathname} = useLocation();

    const menuNav = useRef();
    const logoMenu = useRef();

    const onNavbarView = () => {
        setNavbarView(!navbarView)
    }


    
    const onNavBarClickOutside = (event) => {
        // console.log(event)
        if(menuNav.current && !menuNav.current.contains(event.target)){
            setNavbarView(false)
        }
        if(logoMenu.current.contains(event.target)){
            setNavbarView(true)
        }
    }




    useEffect(() => {
      setNavbarView(false)
    }, [pathname])

    useEffect(() => {
      
        if(navbarView){
            document.addEventListener('mousedown', onNavBarClickOutside)
        }
      return () => {
        document.removeEventListener('mousedown', onNavBarClickOutside)
      }
    }, [navbarView])
    
    

   

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
            
            {/* MOBILE */}

            <div className='container-navbar-2-mobile'>
                <button onClick={onLogout} className='logout-button-navbar'>
                    Logout
                </button>
                <span className='usuario-name'>
                    {user?.name}
                </span>
            </div>

            {/* MOBILE */}






            <div className='container-logo-navbar'>
                <NavLink to={'/home'}>

                    <img src="/assets/logotipo.png" alt="logotipo" className='logo-navbar'/>

                </NavLink>
            </div>








            {/* MOBILE */}

                <div className='navbar-mobile'>
                    <button ref={logoMenu} onClick={() => onNavbarView()}>
                        
                        <img src="/assets/icons/menu.png" alt="" />

                    </button>
                </div>

            
            <div ref={menuNav} className='container-navbar-1-mobile animate__animated animate__fadeIn' style={{display: navbarView ? 'flex' : 'none'}}>
                <NavLink to={'/home'}>
                    Home
                </NavLink>
                <NavLink to={'/products'}>
                    Products
                </NavLink>
                <NavLink to={'/contact'}>
                    Contact
                </NavLink>
                <NavLink to={'/cart'}>
                    Cart
                </NavLink>
                <NavLink to={'/search'}>
                    Search
                </NavLink>
            </div>

            {/* MOBILE */}

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

import React from 'react'
import { Navigate } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';




export const AuthRoutes = [
        {
            path: 'login',
            element: <LoginPage/>,
        },
        {
            path: 'register',
            element: <RegisterPage/>,
        },
        {
            path: '*',
            element: <Navigate to={'/auth/login'}/>
        }
        
    ];

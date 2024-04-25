import React from 'react'
import { HomePage } from '../pages/HomePage'
import { ProductsPage } from '../pages/ProductsPage'
import { ContactPage } from '../pages/ContactPage'
import { Navigate } from 'react-router-dom';
import { CartPage } from '../cart/pages/CartPage';
import { ProductIndividualPage } from '../pages/ProductIndividualPage';
import { SearchPage } from '../pages/SearchPage';

export const PrincipalScreenRoutes = [
        {
            path: '/home',
            element: <HomePage/>,
        },
        {
            path: '/products',
            element: <ProductsPage/>,
        },
        {
            path: '/contact',
            element: <ContactPage/>,
        },
        {
            path: '/cart',
            element: <CartPage/>,
        },
        {
            path: '/product-individual',
            element: <ProductIndividualPage/>,
        },
        {
            path: '/search',
            element: <SearchPage/>,
        },
        {
            path: '/',
            element: <Navigate to={'/home'}/>
        }
    ];

import React, { useState } from 'react'
import { ProductContext } from './ProductContext'
import { products } from '../data/products'
import { useNavigate } from 'react-router-dom'

export const ProductProvider = ({children}) => {


    const [productStateSeeMore, setProductStateSeeMore] = useState({})
    const navigate = useNavigate();

    

    const onSeeMore = (id) => {
        const productSeeMore = products.find((product) => product.id === id)
        setProductStateSeeMore(productSeeMore)
        localStorage.setItem('productIndividual', JSON.stringify(productSeeMore))
        navigate('/product-individual', {
            replace: true,
        })
        return productStateSeeMore;
    }



  return (
    <>
        <ProductContext.Provider value={{
            ...productStateSeeMore,
            productStateSeeMore: productStateSeeMore,
            onSeeMore: onSeeMore,
        }}>
            {children}
        </ProductContext.Provider>
    </>
  )
}

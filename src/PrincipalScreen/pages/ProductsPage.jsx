import React, { useContext, useEffect } from 'react'
import { Product } from '../components/Product'
import {products} from '../data/products'

import 'animate.css'
import { SearchContext } from './context/SearchContext'

export const ProductsPage = () => {

  const { productsFind, showError, showSearchMessage, showSearch, inputValue, onInputChange, onSubmitForm,} = useContext(SearchContext)



  
  
  return (
    <>
    
        <div className='container-products-page'>
          <h1 className='title-products-page'>TAKE A LOOK AT OUR PRODUCTS</h1>
          
            <div className='container-products-search'>
              <div className='search-bar'>
                <h3 className='title-search-bar'>Search</h3>
                <form className='form-search-bar' onSubmit={onSubmitForm}>
                  <input 
                    type="text"
                    placeholder='Search product'
                    value={inputValue}
                    onChange={onInputChange}
                    className='input-search-bar'
                  />
                  <button type='submit' className='button-search-bar'>
                    Send
                  </button>
                </form>
                <div className='container-error-search-bar animate__animated animate__fadeInLeft' style={{display: showError ? '' : 'none'}}>
                  <h3 className='message-error-search-bar'>THE PRODUCT DOES NOT EXIST</h3>
                </div>
              </div>
              <div className='container-products'>
                {
                  showSearch ? (
                    productsFind.map(product =>(
                      <Product key={product.id} product={product}/>
                    ))
                  ) : (
                    products.map(product =>(
                      <Product key={product.id} product={product}/>
                    ))
                  )
                  
                }
              </div>
            </div>
        </div>
    
    </>
  )
}

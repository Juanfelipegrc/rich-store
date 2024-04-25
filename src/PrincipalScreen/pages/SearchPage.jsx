import React, { useContext } from 'react'
import { SearchContext } from './context/SearchContext'
import { Product } from '../components/Product'
import 'animate.css'

export const SearchPage = () => {

  const { productsFind, showError, showSearchMessage, showSearch, inputValue, onInputChange, onSubmitForm,} = useContext(SearchContext)
  return (
    <>
    
        <div className='container-search-page'>
            <h1 className='title-search-page'>SEARCH</h1>
            <div className='container-form-search-page'>
              <form onSubmit={onSubmitForm} className='form-search-page'>
                <input 
                  type="text"
                  placeholder='Search'
                  value={inputValue}
                  onChange={onInputChange}
                  className='input-search-page'
                />
                <button type='submit' className='button-search-page'>Send</button>
              </form>
            </div>
            <div className='container-products-results-search'>
            <div className='container-error-search-page animate__animated animate__fadeInLeft' style={{display: showError ? '' : 'none'}}>
                  <h3 className='message-error-search-page'>THE PRODUCT DOES NOT EXIST</h3>
                </div>
                {
                  showSearch ? (
                    productsFind.map(product =>(
                      <Product key={product.id} product={product}/>
                    ))
                  ) : (
                    <div className='container-search-product-search-page animate__animated animate__fadeIn' style={{display: showError ? 'none' : ''}}>
                      <h3> SEARCH FOR A PRODUCT THAT INTERESTS YOU </h3>
                    </div>
                  )
                  
                }
            </div>

        </div>
    
    </>
  )
}

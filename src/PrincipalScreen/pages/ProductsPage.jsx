import { useEffect } from 'react'
import { Product } from '../components/Product'
import {products} from '../data/products'
import 'animate.css'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { performSearch, setInputValue } from '../../store/slices/search/searchSlice'
import queryString from 'query-string'





export const ProductsPage = () => {


  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const {showError, showSearch, productsFind, inputValue } = useSelector(state => state.search)


  useEffect(() => {
    const {q = ''} = queryString.parse(location.search)
    dispatch(performSearch(q));
    dispatch(setInputValue(q));
  }, [location.search])
  
  
  const onInputChange = ({target}) => {
    dispatch(setInputValue(target.value))
  }

  const onSubmitForm = (event) => {
    event.preventDefault(),

    navigate(`?q=${inputValue}`)
  }

  useEffect(() => {
    localStorage.setItem('lastPath', JSON.stringify(location.pathname))
  }, [location.pathname])




  
  
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

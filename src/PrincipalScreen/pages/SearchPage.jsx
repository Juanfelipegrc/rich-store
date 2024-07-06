import { useDispatch, useSelector } from 'react-redux';
import { performSearch, setInputValue } from '../../store/slices/search/searchSlice';
import { Product } from '../components/Product'
import 'animate.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import queryString from 'query-string';

export const SearchPage = () => {

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

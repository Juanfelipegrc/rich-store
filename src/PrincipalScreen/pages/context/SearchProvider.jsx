import React, { useState } from 'react'
import { SearchContext } from './SearchContext'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string';
import { getByProductName } from '../../helpers/getByProductName';

export const SearchProvider = ({children}) => {



    const location = useLocation();
    const {q = ''} = queryString.parse(location.search)
    const productsFind = getByProductName(q)

    const showSearchMessage = (q.length === 0);
    const showError = (q.length > 0) && (productsFind.length === 0)
    const showSearch = (productsFind.length > 0)

    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        // console.log(productsFind)
        navigate(`?q=${inputValue}`)

    }

  return (
    <>
    
        <SearchContext.Provider value={{
            productsFind: productsFind,
            showError: showError,
            showSearchMessage: showSearchMessage,
            showSearch: showSearch,
            inputValue: inputValue,
            onInputChange: onInputChange,
            onSubmitForm: onSubmitForm,
        }}>
            {children}
        </SearchContext.Provider>
    
    </>
  )
}

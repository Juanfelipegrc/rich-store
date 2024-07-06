import { createSlice } from '@reduxjs/toolkit';
import {getByProductsName} from '../../../PrincipalScreen/helpers/getByProductsName';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        productsFind: {},
        showError: false,
        showSearchMessage: true,
        showSearch: false,
        inputValue: '',
    },
    reducers: {
        setProductsFind: (state, {payload}) => {
            state.productsFind = payload
        },
        setShowError: (state, {payload}) => {
            state.showError = payload
        },
        setShowSearch: (state, {payload}) => {
            state.showSearch = payload
        },
        setInputValue: (state, {payload}) => {
            state.inputValue = payload
        },
        performSearch(state, {payload}) {
            const name = payload.toLocaleLowerCase().trim();
            const products = getByProductsName(name);
            state.productsFind = products;
            state.showError = name.length > 0 && products.length === 0;
            state.showSearch = products.length > 0;
        }
    
    }
});


// Action creators are generated for each case reducer function
export const { setProductsFind, setShowError, setShowSearch, setInputValue, performSearch } = searchSlice.actions;
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: JSON.parse(localStorage.getItem('productsInCart')) || [],
    },
    reducers: {
        AddProductCart: (state, {payload}) => {
            state.cart = [...state.cart, payload]
        },
        RemoveProductCart: (state, {payload}) => {
            state.cart = state.cart.filter(product => product.id2 != payload)
        },
        RemoveAllProducts: (state) => {
            state.cart = [];
        }
    }
});


// Action creators are generated for each case reducer function
export const { AddProductCart, RemoveProductCart, RemoveAllProducts } = cartSlice.actions;
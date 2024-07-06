import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../../PrincipalScreen/data/products';

export const productIndividualSlice = createSlice({
    name: 'productIndividual',
    initialState: {
        productStateSeeMore: JSON.parse(localStorage.getItem('productIndividual')) || {},
    },
    reducers: {
        onSeeMore: (state, {payload}) => {
            const productSeeMore = products.find((product) => product.id === payload)
            state.productStateSeeMore = productSeeMore;
            localStorage.setItem('productIndividual', JSON.stringify(productSeeMore))

        }
    }
});


// Action creators are generated for each case reducer function
export const { onSeeMore } = productIndividualSlice.actions;
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { productIndividualSlice } from "./slices/productIndividual/productIndividualSlice";
import { cartSlice } from "./slices/cart/cartSlice";
import { searchSlice } from "./slices/search/searchSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        productIndividual: productIndividualSlice.reducer,
        cart: cartSlice.reducer,
        search: searchSlice.reducer,
    }
})
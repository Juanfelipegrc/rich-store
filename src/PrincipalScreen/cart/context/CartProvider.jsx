import React, { useEffect, useReducer } from 'react'
import { cartReducer } from './cartReducer'
import { typesCart } from '../types/typesCart'
import {CartContext} from './CartContext'

const init = () => {
    return JSON.parse(localStorage.getItem('productsInCart')) || [];
}

export const CartProvider = ({children}) => {

    const [cartState, dispatch] = useReducer(cartReducer, [], init)

    useEffect(() => {
        localStorage.setItem('productsInCart', JSON.stringify(cartState))
    
    }, [cartState])

    const AddProductCart = (product) => {
        const action = {
            type: typesCart.add,
            payload: product,
        }



        dispatch(action)
    }

    const RemoveProductCart = (product) => {
        const action = {
            type: typesCart.remove,
            payload: product.id2,
        }

        
        

        dispatch(action)
    }

    const RemoveAllProducts = () => {
        const action = {
            type: typesCart.removeAll,
            payload: []
        }


        dispatch(action)
    }


    

  return (
    <>
    
        <CartContext.Provider value={{
            ...cartState,
            cartState: cartState,
            AddProductCart: AddProductCart,
            RemoveProductCart: RemoveProductCart,
            RemoveAllProducts: RemoveAllProducts,
        }}>
            
            {children}

        </CartContext.Provider>
    
    </>
  )
}

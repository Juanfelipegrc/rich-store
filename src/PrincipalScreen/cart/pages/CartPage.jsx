import React, { useEffect } from 'react'

import { ProductCart } from '../../components/ProductCart';
import { RemoveAllProducts } from '../../../store/slices/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

export const CartPage = () => {
  
  const {cart} = useSelector(state => state.cart)
  const dispatch = useDispatch();

  const productsInCart = cart;




  const getStyleProductsInCart = () => {
    if(productsInCart.length != 0){
      return {}
      
    }else{
      return {display: 'none'}
    }
    
  }
  const totalPrice = productsInCart.reduce((total, product) =>  total + Number(product.price), 0);


  useEffect(() => {
    localStorage.setItem('productsInCart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.removeItem('lastPath', JSON.stringify(location.pathname));


    localStorage.setItem('lastPath', JSON.stringify(location.pathname));


  }, [location.pathname])
  
  

  return (
    <>
      <div className='container-cart-page'>
        <h1 className='title-cart-page'>CART</h1>

        <div className='container-containers-cart-page'>
          <div className={`${productsInCart.length != 0 ? 'container-products-in-cart' : 'container-products-in-cart-empty'} `}>
            <h2 style={getStyleProductsInCart()}>PRODUCTS IN CART</h2>
            {
            productsInCart.length != 0 
              ? (productsInCart.map((product, index) => (

                  <div key={`${product.id}-${index}`} className='product-in-cart'>

                    <ProductCart key={`${product.id}-${index}`} product={product}/>

                  </div>

              ))) : <h1 className='empty-cart'>EMPTY CART</h1> 
            }
          </div>
          <div className='container-total-to-pay'>
            <div className='container-products-section-1-total-to-pay'>
              <h1>TOTAL TO PAY</h1>
              <hr className='separator-total-to-pay'/>
              <div className='container-products-in-total-to-pay'>
                {
                  productsInCart.map((product, index) => (
                    <div className='product-in-total-to-pay' key={`${product.id}-${index}`}>
                      <p>Name: {product.name}</p>
                      <p>Price: {product.price}</p>
                    </div>
                  ))
                }
              </div>
            </div>
            
            <div className='container-total-price'>
              <button className='button-remove-all-products' onClick={() => dispatch(RemoveAllProducts())} style={getStyleProductsInCart()}>Remove All Products</button>
              <h2>TOTAL: {totalPrice}</h2>
              <button className='button-pay-cart-page'>Pay</button>
            </div>


          </div>

        </div>
      </div>
    
    </>
  )
}

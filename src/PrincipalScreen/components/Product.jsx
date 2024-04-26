import React, { useContext, useState } from 'react'
import { CartContext } from '../cart/context/CartContext';
import { ProductContext } from '../context/ProductContext';
import 'animate.css';

export const Product = ({product}) => {

  const {AddProductCart, cartState} = useContext(CartContext);

  const {onSeeMore} = useContext(ProductContext);
  
  // console.log(product.added)

  
  const productAdded = cartState.find(productAdded => productAdded.id === product.id) ? true : false
  product.added = productAdded;


  
  const onAddProductCart = (product) => {

    const productEqual = cartState.filter(productEqual => productEqual.id === product.id).length;
 
    const newProduct = {
      ...product,
      quantity: productEqual,
      id2: `${product.id}-${String(productEqual)}`,
    };
      // console.log(cartState)

      AddProductCart(newProduct)

      


   

    

    
  
  }
  // console.log(product.added)
  


  return (
    <>

    <div className='product animate__animated animate__fadeIn'>
        <img className='image-product' src={`/assets/products/${product.id}.webp`} alt="" />
        <div className='content-product'>
            <h4 className='item-content-product'>Name: {product.name}</h4>
            <h4 className='item-content-product'>Price: ${product.price}</h4>
            <div className='buttons-products'>



              {
                product.added ? (
                  <button onClick={() => onAddProductCart(product)} className='item-content-product button-content-product-added-product'><img src="/assets/icons/check-icon-white.png" alt="icon-check" className='check-icon-product animate__animated animate__fadeIn' />Add to cart</button>
                ) : (
                  <button onClick={() => onAddProductCart(product)} className='item-content-product button-content-product'>Add to cart</button>
                )
              }
                <button onClick={() => onSeeMore(product.id)} className='item-content-product button-content-product'>See more</button>
            </div>
        </div>
    </div>
    
    </>
  )
}

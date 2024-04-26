import React, { useContext } from 'react'
import { CartContext } from '../cart/context/CartContext';
import { ProductContext } from '../context/ProductContext';

export const ProductCart = ({product}) => {

  const {RemoveProductCart, cartState} = useContext(CartContext);
  const {onSeeMore} = useContext(ProductContext);

  const onRemoveProductCart = (product) => {

    const productEqual = cartState.filter(productEqual => productEqual.id === product.id)
    if(cartState.find(productCart => productCart.id === product.id)){
      product.quantity = productEqual.length;
      RemoveProductCart(product)

    }else{
      product.quantity = productEqual.length;
      RemoveProductCart(product) 
    }
  }





  return (
    <>

    <div className='product'>
        <img className='image-product' src={`/assets/products/${product.id}.webp`} alt="" />
        <div className='content-product'>
            <h4 className='item-content-product'>Name: {product.name}</h4>
            <h4 className='item-content-product'>Price: ${product.price}</h4>
            <div>
                <button onClick={() => onRemoveProductCart(product)} className='item-content-product button-content-product'>Remove</button>
                <button onClick={() => onSeeMore(product.id)}  className='item-content-product button-content-product'>See more</button>
            </div>
        </div>
    </div>
    
    </>
  )
}

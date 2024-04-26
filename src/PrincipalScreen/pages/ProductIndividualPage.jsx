import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../context/ProductContext'
import { CartContext } from '../cart/context/CartContext';
import { useNavigate } from 'react-router-dom';
import 'animate.css';


export const ProductIndividualPage = () => {

  const {productStateSeeMore} = useContext(ProductContext);
  const {AddProductCart, cartState} = useContext(CartContext)

  const navigate = useNavigate();

  

  const lastPath = localStorage.getItem('lastPath') || '';
  const onNavigateBack = () => {
    if(lastPath.includes('/products')){
      navigate('/products')
    }
    if(lastPath.includes('/cart')){
      navigate('/cart')
    }
    if(lastPath.includes('/home')){
      navigate('/home')
    }
  }

  const productIndividualValidation = () => {
    const product = JSON.parse(localStorage.getItem('productIndividual')) || '';
    if(JSON.stringify(productStateSeeMore) === '{}'){
      return product
    }else{
      return productStateSeeMore
    }
  }

  const productIndividual = productIndividualValidation();



  const productAdded = cartState.find(productAdded => productAdded.id === productIndividual.id) ? true : false;
  productIndividual.added = productAdded;


  
  const onAddProductCart = (product) => {

    const productEqual = cartState.filter(productEqual => productEqual.id === product.id).length;
 
    const newProduct = {
      ...product,
      quantity: productEqual,
      id2: `${product.id}-${String(productEqual)}`,
    };
      console.log(cartState)

      AddProductCart(newProduct)
    
  
  }

    
  return (
    <>
    
        <div className='container-product-individual-page'>
          <h1 className='title-product-individual'>{productIndividual.name}</h1>
            <div className='container-product-individual animate__animated animate__fadeInLeft'>
              <div className='container-image'>
                  <img className='image-product-individual-page' src={`/assets/products/${productIndividual.id}.webp`} alt="" />
              </div>


              <div className='container-content-individual-product'>

                  <div className='container-content-individual-product-section-1'>
                    
                    <h3>Price: {productIndividual.price}</h3>
                    {
                productIndividual.added ? (
                  <button onClick={() => onAddProductCart(productIndividual)} className='item-content-product button-content-product-added-product-individual-page'><img src="../../../../assets/icons/check-icon-white.png" alt="icon-check" className='check-icon-product animate__animated animate__fadeIn' />Add to cart</button>
                ) : (
                  <button onClick={() => onAddProductCart(productIndividual)} className='item-content-product button-content-product-added-product-individual-page'>Add to cart</button>
                )
              }
                  </div>


                  <div className='container-content-individual-product-section-2'>
                    <h3>Description:</h3>
                    <p>{productIndividual.desc}</p>
                  </div>


              </div>
            </div>
              <button onClick={() => onNavigateBack()} className='button-back-product-individual'>Back</button>
        </div>
    
    </>
  )
}

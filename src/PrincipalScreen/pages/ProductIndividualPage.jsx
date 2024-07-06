import {  useNavigate } from 'react-router-dom';
import 'animate.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddProductCart } from '../../store/slices/cart/cartSlice';



export const ProductIndividualPage = () => {

  const {productStateSeeMore} = useSelector(state => state.productIndividual);
  const {cart} = useSelector(state => state.cart)
  const dispatch = useDispatch();

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



  const productAdded = cart.find(productAdded => productAdded.id === productStateSeeMore.id) ? true : false;
  const updateProduct = {...productStateSeeMore, added: productAdded};


  
  const onAddProductCart = (product) => {

    const productEqual = cart.filter(productEqual => productEqual.id === product.id).length;
 
    const newProduct = {
      ...product,
      quantity: productEqual,
      id2: `${product.id}-${String(productEqual)}`,
    };
      // console.log(cartState)

      dispatch(AddProductCart(newProduct));
    
  
  }

    
  return (
    <>
    
        <div className='container-product-individual-page'>
          <h1 className='title-product-individual'>{productStateSeeMore.name}</h1>
            <div className='container-product-individual animate__animated animate__fadeInLeft'>
              <div className='container-image'>
                  <img className='image-product-individual-page' src={`/assets/products/${productStateSeeMore.id}.webp`} alt="" />
              </div>


              <div className='container-content-individual-product'>

                  <div className='container-content-individual-product-section-1'>
                    
                    <h3>Price: {productStateSeeMore.price}</h3>
                    {
                updateProduct.added ? (
                  <button onClick={() => onAddProductCart(productStateSeeMore)} className='item-content-product button-content-product-added-product-individual-page'><img src="../../../../assets/icons/check-icon-white.png" alt="icon-check" className='check-icon-product animate__animated animate__fadeIn' />Add to cart</button>
                ) : (
                  <button onClick={() => onAddProductCart(productStateSeeMore)} className='item-content-product button-content-product-added-product-individual-page'>Add to cart</button>
                )
              }
                  </div>


                  <div className='container-content-individual-product-section-2'>
                    <h3>Description:</h3>
                    <p>{productStateSeeMore.desc}</p>
                  </div>


              </div>
            </div>
              <button onClick={() => onNavigateBack()} className='button-back-product-individual'>Back</button>
        </div>
    
    </>
  )
}

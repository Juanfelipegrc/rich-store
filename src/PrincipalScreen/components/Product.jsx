import 'animate.css';
import { onSeeMore } from '../../store/slices/productIndividual/productIndividualSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddProductCart } from '../../store/slices/cart/cartSlice';

export const Product = ({product}) => {

  const {cart} = useSelector(state => state.cart)
  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  // console.log(product.added)

  
  const productAdded = cart.find(productAdded => productAdded.id === product.id) ? true : false;
  const updateProduct = {...product, added: productAdded};


  const onSeeMoreNavigation = () => {
    dispatch(onSeeMore(product.id))
    navigate('/product-individual', {
      replace: true,
    })
  }
  
  const onAddProductCart = (product) => {

    const productEqual = cart.filter(productEqual => productEqual.id === product.id).length;

 
    const newProduct = {
      ...product,
      quantity: productEqual,
      id2: `${product.id}-${String(productEqual)}`,
    };
  
      // console.log(cartState)

      dispatch(AddProductCart(newProduct))


  
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
                updateProduct.added ? (
                  <button onClick={() => onAddProductCart(product)} className='item-content-product button-content-product-added-product'><img src="/assets/icons/check-icon-white.png" alt="icon-check" className='check-icon-product animate__animated animate__fadeIn' />Add to cart</button>
                ) : (
                  <button onClick={() => onAddProductCart(product)} className='item-content-product button-content-product'>Add to cart</button>
                )
              }
                <button onClick={() => onSeeMoreNavigation()} className='item-content-product button-content-product'>See more</button>
            </div>
        </div>
    </div>
    
    </>
  )
}

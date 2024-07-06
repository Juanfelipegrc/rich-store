import { useDispatch, useSelector } from 'react-redux';
import { onSeeMore } from '../../store/slices/productIndividual/productIndividualSlice';
import { RemoveProductCart } from '../../store/slices/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

export const ProductCart = ({product}) => {

  const {cart} = useSelector(state => state.cart)

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onRemoveProductCart = (product) => {

    const productEqual = cart.filter(productEqual => productEqual.id === product.id)
    if(cart.find(productCart => productCart.id === product.id)){
      const updateProduct = { ...product, quantity: productEqual.length }
      dispatch(RemoveProductCart(updateProduct.id2))

    }else{
      const updateProduct = { ...product, quantity: productEqual.length }
      dispatch(RemoveProductCart(updateProduct.id2))
    }
  }

  

  const onSeeMoreNavigation = () => {
    dispatch(onSeeMore(product.id))
    navigate('/product-individual', {
      replace: true,
    })
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
                <button onClick={() => onSeeMoreNavigation(product.id)}  className='item-content-product button-content-product'>See more</button>
            </div>
        </div>
    </div>
    
    </>
  )
}

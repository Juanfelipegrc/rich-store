import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'animate.css';
import { offertProducts } from '../data/offertProduct';
import { Product } from '../components/Product';
import { AboutUs } from '../components/AboutUs';


export const HomePage = () => {

  const navigate = useNavigate();


  return (
    <>
      
      <div className='contenedor-home-page animate__animated animate__fadeIn'>
        <div className='container-banner-home-page'>
          <div className='superposition-home-page'>
            <h1 className='title-home-page'>WELCOME TO RICHSTORE</h1>
            <button onClick={() => navigate('/products')} className='button-home-page'>
              See catalog
            </button>
          </div>
        </div>
        <div className='container-section-2'>
          <h3 className='subtitle-home-page'>OUR BEST OFFERS</h3>
          <div className='container-offers-home-page'>
            {
              offertProducts.map(product => (
                <Product key={product.id} product={product}/>
              ))
            }
          </div>
        </div>
        <div className='container-section-3'>
            <h3 className='subtitle-home-page-2'>About Us - RichStore</h3>
            <AboutUs/>
        </div>
      </div>
    
    </>
  )
}

import React, { useState } from 'react'
import 'animate.css'

export const ContactPage = () => {


  return (
    <>
      <div className='container-contact-page'>
        <div className='container-form-contact-page animate__animated animate__fadeIn'>
          <h1 className='title-contact-page'>CONTACT</h1>
          <h3>FILL OUT YOUR INFORMATION TO SEND A MESSAGE</h3>
          <form className='form-contact-page'>
              
            <input 
              type="text"
              placeholder='Usuario'
              className='input-contact-page'

            />
            <input 
              type="email"
              placeholder='Email'
              className='input-contact-page'
            />
            <input 
              type="text"
              placeholder='Message'
              className='input-contact-page'
            />

            <button className='contact-button-page'>
              Send
            </button>


          </form>
        </div>
      </div>

    </>
  )
}

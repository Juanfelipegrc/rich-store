import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { startEmailPasswordRegister } from '../../store/slices/auth/thunks';
import { deleteErrorMessage } from '../../store/slices/auth/authSlice';
import { useCheckAuth } from '../../hooks';
import { CheckingAuth } from '../../ui/components/CheckingAuth';


const formData = {
  displayName: '',
  email: '',
  password: '',
};

const formValidations = {
  email: [(value) => value.includes('@'), 'does not contain an @'],
  password: [(value) => value.length >= 6, 'very short password'],
  displayName: [(value) => value.length >= 1, 'required username']
}



export const RegisterPage = () => {

  const { errorMessage} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();


  const [rectifiedValidations, setRectifiedValidations] = useState({
    validationEmail: null,
      validationDisplayName: null,
      validationPassword: null,
  })

  const {email, password, displayName, onInputChange, onResetForm, displayNameValid, emailValid, passwordValid} = useForm(formData, formValidations)



  const [inputType, setInputType] = useState('password')
  const [buttonSeePassword, setbuttonSeePassword] = useState('Show')




  


  const onSubmit = (event) => {
    event.preventDefault()
    setRectifiedValidations({
      validationEmail: emailValid,
      validationDisplayName: displayNameValid,
      validationPassword: passwordValid
    });


    if(displayNameValid != null){
      return;
    };
    if(emailValid != null){
      return;
    };
    if(passwordValid != null){
      return;
    }
    
    

    dispatch(startEmailPasswordRegister({email, password, displayName}))


    onResetForm()
  }

  const onPasswordVisibility = () => {
    if(inputType === 'password'){
      setInputType('text')
      setbuttonSeePassword('Hide')
    }else{
      setInputType('password')
      setbuttonSeePassword('Show')
    }
  }

  const navigateLogin = () => {
    navigate('/auth/login')
  }



  useEffect(() => {


    return () => {
      if(!!errorMessage){
        dispatch(deleteErrorMessage());
      }
    }
  }, [])

  
  
  const statusChecking = useCheckAuth();



  

  

  return (
    <>

      {
        statusChecking === 'checking' ? <CheckingAuth/>: ''
      }

      
      <div className='container-login'>

        <div className='container-register-page'>
          <h1 className='title-login-page'>Register</h1>



          <form className='form-login' onSubmit={onSubmit}>

              <div className='auth-credentials-error animate__animated animate__bounceInLeft animate__faster'
              style={{display: !!errorMessage? 'flex': 'none'}}>
                <p>{errorMessage}</p>
              </div>

              <div className='container-input-auth'>
                <input 
                  type="text"
                  placeholder='Enter Username'
                  value={displayName}
                  onChange={onInputChange}
                  className={rectifiedValidations.validationDisplayName != null? 'input-login-page-error' : 'input-login-page'}
                  name='displayName'

                />
                <p className='message-error-auth'>{rectifiedValidations.validationDisplayName}</p>

              </div>
              <input 
                type="text"
                placeholder='Enter Email'
                value={email}
                onChange={onInputChange}
                className={rectifiedValidations.validationEmail != null? 'input-login-page-error' : 'input-login-page'}
                name='email'

              />
              <p className='message-error-auth'>{rectifiedValidations.validationEmail}</p>
              <div className='container-password-login-page'>

               
                <input 
                  type={inputType}
                  placeholder='Enter Password'
                  value={password}
                  onChange={onInputChange}
                  className={rectifiedValidations.validationPassword != null? 'input-login-page-error' : 'input-login-page-2'}
                  name='password'
                />
                
                <div className='container-button-see-password'>
                  <a className='button-see-password' onClick={() => onPasswordVisibility()}>{buttonSeePassword}</a>
                </div>
                
              </div>
              <p className='message-error-auth'>{rectifiedValidations.validationPassword}</p>
              

              <div className='container-buttons-auth-register'>
                <button type='submit' className='register-button-page'>
                  Register
                </button>
              </div>
            </form>
            <div className='container-change-page-auth'>
                <p>Do you already have an account?<a className='button-change-page-auth' onClick={() => navigateLogin()}>Sing in</a></p>
                
              </div>
        </div>
    
      </div>
    </>
  )
}

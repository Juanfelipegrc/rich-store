import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteErrorMessage } from '../../store/slices/auth/authSlice';
import { useForm, useCheckAuth } from '../../hooks/';
import {  startEmailPasswordLogin, startGoogleSignIn } from '../../store/slices/auth/thunks';
import { CheckingAuth } from '../../ui/components/CheckingAuth'

const formData = {
  email: '',
  password: '',
};

const formValidations = {
  email: [(value) => value.includes('@'), 'does not contain an @'],
  password: [(value) => value.length >= 6, 'very short password'],
}

export const LoginPage = () => {
  const {status, errorMessage} = useSelector(state => state.auth)

  const [rectifiedValidations, setRectifiedValidations] = useState({
    validationEmail: null,
      validationPassword: null,
  })



  const dispatch = useDispatch();
  const navigate = useNavigate();



  const {email, password, onInputChange, onResetForm, emailValid, passwordValid} = useForm(formData, formValidations)

  const isAuthenticating = useMemo(() => status === 'checking', [status]);



 
  const [inputType, setInputType] = useState('password')
  const [buttonSeePassword, setbuttonSeePassword] = useState('Show')



  const onSubmit = (event) => {
    event.preventDefault()
    setRectifiedValidations({
      validationEmail: emailValid,
      validationPassword: passwordValid
    });



    if(emailValid != null){
      return;
    };
    if(passwordValid != null){
      return;
    }

    dispatch(startEmailPasswordLogin({email, password}))
    onResetForm()
  }
  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
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

  const navigateRegister = () => {
    navigate('/auth/register')
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

        <div className='container-login-page'>
          <h1 className='title-login-page'>Login</h1>
          
         
          <form className='form-login' onSubmit={onSubmit}>

              <div className='auth-credentials-error animate__animated animate__bounceInLeft animate__faster'

              style={{display: !!errorMessage? 'flex': 'none'}}
              >
                <p>{errorMessage}</p>
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

              
              

              <div className='container-buttons-auth-login'>
                <button 
                  type='submit' 
                  className={isAuthenticating? 'login-button-page-disabled' : 'login-button-page'}
                  disabled={isAuthenticating}
                  >
                  Login
                </button>
                <button 
                className={isAuthenticating? 'login-button-page-disabled' : 'login-button-page'}
                onClick={onGoogleSignIn}
                disabled={isAuthenticating}
                >
                  Google
                </button>
              </div>
            </form>
            
              <div className='container-change-page-auth'>
                <p>You do not have an account?<a className='button-change-page-auth' onClick={() => navigateRegister()}> Create an account</a></p>
                
              </div>
        </div>
    
      </div>
    </>
  )
}

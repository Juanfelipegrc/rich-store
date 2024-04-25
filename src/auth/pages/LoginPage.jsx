import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';


export const LoginPage = () => {

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);
  const [inputValue, setInputValue] = useState('')
  const [inputPassword, setinputPassword] = useState('')
  const [inputType, setInputType] = useState('password')
  const [buttonSeePassword, setbuttonSeePassword] = useState('Show')

  const onInputChange = ({target}) => {
    setInputValue(target.value)
  };

  const onInputChangePassword = ({target}) => {
    setinputPassword(target.value)
  };

  const onSubmitForm = (event) => {
    event.preventDefault()
    onLogin();
  }

  const onLogin = () => {

    if(inputValue.length === 0) return;
    if(inputPassword != 'Software-programmer') return;
    
    login(inputValue)

    navigate('/home', {
      replace: true,
    })
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

  

  return (
    <>
      <div className='container-login'>

        <div className='container-login-page'>
          <h1 className='title-login-page'>Login</h1>
          <form className='form-login' onSubmit={onSubmitForm}>
              <input 
                type="text"
                placeholder='Enter Username'
                value={inputValue}
                onChange={onInputChange}
                className='input-login-page'

              />
              <div className='container-password-login-page'>
                <input 
                  type={inputType}
                  placeholder='Enter Password'
                  value={inputPassword}
                  onChange={onInputChangePassword}
                  className='input-login-page'
                />
                <div className='container-button-see-password'>
                  <a className='button-see-password' onClick={() => onPasswordVisibility()}>{buttonSeePassword}</a>
                </div>
                
              </div>


              <button type='submit' className='login-button-page'>
                Send
              </button>
            </form>
        </div>
    
      </div>
    </>
  )
}

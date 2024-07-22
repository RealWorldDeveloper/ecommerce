import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
import { LoginPop,SignUpStatus } from '../../Redux/Login/LoginSlice'
import { useDispatch, useSelector } from 'react-redux'
function Login() {
  const currentStatus = useSelector(state => state.login.currentStatus)
  const dispatch = useDispatch()
  return (
    <div className='login-popup'>
      <form  className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currentStatus}</h2>
          <img onClick={()=> dispatch(LoginPop(false)) } src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
          {currentStatus === 'Login' ? <></>: <input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Your Password' required />
          <button>{currentStatus === 'Sign Up' ? 'Create Account': 'Login'}</button>
          <div className='login-popup-condition'>
            <input type="checkbox" required />
            <p>By continuing , I agree to the terms and Conditions</p>
          </div>
          {currentStatus === 'Login'? <p>Create a New Account? <span onClick={()=> dispatch(SignUpStatus('Sign Up'))}>Click Here</span></p>:<p>Already have an Account?<span onClick={()=> dispatch(SignUpStatus('Login'))}>Login Here</span></p>}
                 
        </div>
      </form>
    </div>
  )
}

export default Login

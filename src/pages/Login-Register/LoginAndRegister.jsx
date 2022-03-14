import React from 'react'
import './LoginAndRegister.style.scss'
import Signin from '../../components/Signin/Signin'
import Signup from '../../components/Signup/Signup'

const LoginAndRegister = () => {
  return (
    <div className='sign-in-and-sign-up'><Signin/><Signup/></div>
  )
}

export default LoginAndRegister
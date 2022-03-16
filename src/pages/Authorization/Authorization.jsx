import React from 'react'
import './Authorization.style.scss'
import Signin from '../../components/Sign-In/Signin'
import Signup from '../../components/Sign-Up/Signup'

const Authorization = () => {
  return (
    <div className='auth'><Signin/><Signup/></div>
  )
}

export default Authorization
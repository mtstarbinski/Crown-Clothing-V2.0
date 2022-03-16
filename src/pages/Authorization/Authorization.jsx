import React from 'react'
import './Authorization.style.scss'
import Signin from '../../components/Signin/Signin'
import Signup from '../../components/Signup/Signup'

const Authorization = () => {
  return (
    <div className='auth'><Signin/><Signup/></div>
  )
}

export default Authorization
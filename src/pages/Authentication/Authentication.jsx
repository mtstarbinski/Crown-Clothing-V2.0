import React from 'react'
import './Authentication.style.scss'
import Signin from '../../components/Sign-In/Signin'
import Signup from '../../components/Sign-Up/Signup'

const Authentication = () => {
  return (
    <div className='auth'><Signin/><Signup/></div>
  )
}

export default Authentication
import React from 'react'
import { AuthenticationContainer } from './Authentication.style'
import Signin from '../../components/Sign-In/Signin'
import Signup from '../../components/Sign-Up/Signup'

const Authentication = () => {
  return (
    <AuthenticationContainer><Signin/><Signup/></AuthenticationContainer>
  )
}

export default Authentication
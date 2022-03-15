import React from 'react'
import './Button.style.scss'

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};


const Button = ({children, buttonType, ...props}) => {
  return (
    <button className={`${BUTTON_TYPE_CLASSES[buttonType]} custom-button`} {...props}>
        {children}
    </button>
  )
}

export default Button
import React from "react";
import { BaseButton, InvertedButton, GoogleButton, ButtonSpinner } from "./Button.style.js";

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => ({
  [BUTTON_TYPE_CLASSES.base]: BaseButton,
  [BUTTON_TYPE_CLASSES.google]: GoogleButton,
  [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
}[buttonType]);

const Button = ({ children, buttonType, isLoading, ...props }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton disabled={isLoading} {...props}>{isLoading ? <ButtonSpinner /> : children}</CustomButton>;
};

export default Button;

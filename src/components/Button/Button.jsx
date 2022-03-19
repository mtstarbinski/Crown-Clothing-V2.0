import React from "react";
import { BaseButton, GoogleButton, InvertedButton } from "./Button.style.js";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...props }) => {
  const CustomButton = BaseButton;
  return <CustomButton {...props}>{children}</CustomButton>;
};

export default Button;

import { useState } from "react";
import { SignUpContainer } from "./Signup.style";
import FormInput from "../Form-Input/FormInput";
import { BaseButton } from "../Button/Button.style";
import {
  createUserDocument,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultRegisterData = {
  displayName: "",
  email: "",
  password: "",
  confPassword: "",
};

const Signup = () => {
  const [registerData, setRegisterData] = useState(defaultRegisterData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocument(user, { displayName });
      setRegisterData(defaultRegisterData);
      alert("Account Succesfully Created!");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot create account, email already in use.");
      }
      console.error(err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterData({ ...registerData, [name]: value });
  };

  const { displayName, email, password, confPassword } = registerData;

  return (
    <SignUpContainer>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label="Display Name"
          onChange={handleChange}
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          label="email"
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="confPassword"
          value={confPassword}
          label="Confirm Password"
          onChange={handleChange}
        />
        <BaseButton type="submit">Sign Up</BaseButton>
      </form>
    </SignUpContainer>
  );
};

export default Signup;

import { useState } from "react";
import "./Signup.style.scss";
import FormInput from "../Form-Input/FormInput";
import Button from "../Button/Button";
import {
  createUserDocument,
  createAuthUserWithEmailAndPassword,
} from "../../firebase/firebase.utils";

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
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
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
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default Signup;

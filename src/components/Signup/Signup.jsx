import { useState } from "react";
import "./Signup.style.scss";
import FormInput from "../Form-Input/FormInput";
import Button from "../Button/Button";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const Signup = () => {
  const [registerData, setRegisterData] = useState({
    displayName: "",
    email: "",
    password: "",
    confPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      setRegisterData({
        displayName: "",
        email: "",
        password: "",
        confPassword: "",
      });
    } catch (err) {
      console.error(err.message);
      alert(err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
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
          handleChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          label="email"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confPassword"
          value={confPassword}
          label="Confirm Password"
          handleChange={handleChange}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default Signup;

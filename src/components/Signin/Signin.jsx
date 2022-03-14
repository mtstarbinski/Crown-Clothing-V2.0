import { useState } from "react";
import FormInput from "../Form-Input/FormInput";
import Button from "../Button/Button";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./Signin.style.scss";

const Signin = () => {
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = signInData;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setSignInData({
        email: "",
        password: "",
      })
    } catch (err) {
      console.log(err);
    }

    setSignInData({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignInData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with you email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          label="email"
          name="email"
          value={signInData.email}
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          value={signInData.password}
          handleChange={handleChange}
        />
        <div className="buttons">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</Button>
        </div>
      </form>
    </div>
  );
};

export default Signin;

import { useState, useContext } from "react";
import FormInput from "../Form-Input/FormInput";
import Button from "../Button/Button";
import {
  createUserDocument,
  signInWithGoogle,
  signInAuthUserWithEmailAndPassword,
} from "../../firebase/firebase.utils";
import "./Signin.style.scss";

const defaultLogInData = {
  email: "",
  password: "",
};

const Signin = () => {
  const [signInData, setSignInData] = useState(defaultLogInData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignInData({ ...signInData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = signInData;

    try {
      const user = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(user);
      setSignInData(defaultLogInData);
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          alert("No account exists with this email address!");
          break;
        case "auth/wrong-password":
          alert("Incorrect password.");
          break;
        default:
          alert("Something went wrong.");
      }
    }
  };

  const googleSignIn = async () => {
    await signInWithGoogle();
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
          onChange={handleChange}
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          value={signInData.password}
          onChange={handleChange}
        />
        <div className="buttons">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={googleSignIn} buttonType="google">
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signin;

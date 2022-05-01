import { useState } from "react";
import FormInput from "../Form-Input/FormInput";
import Button, {BUTTON_TYPE_CLASSES} from "../Button/Button";

import { SignInContainer, ButtonsContainer } from "./Signin.style"
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";
import { useDispatch } from "react-redux";

const defaultLogInData = {
  email: "",
  password: "",
};

const Signin = () => {
  const [signInData, setSignInData] = useState(defaultLogInData);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignInData({ ...signInData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = signInData;

    try {
      dispatch(emailSignInStart(email, password));
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
    dispatch(googleSignInStart());
  };

  return (
    <SignInContainer>
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
        <ButtonsContainer>
          <Button type="submit">
            Sign In
          </Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={googleSignIn}
          >
            Sign in with Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default Signin;

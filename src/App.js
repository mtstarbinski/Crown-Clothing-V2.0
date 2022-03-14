import "./App.scss";
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop.jsx";
import Header from "./components/Header/Header.jsx";
import LoginAndRegister from "./pages/Login-Register/LoginAndRegister";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import Checkout from "./pages/Checkout/Checkout";

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    var unsubscribeFromAuth = () =>
      auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot((snapShot) => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          });
        } else {
          setCurrentUser(null);
        }

        setCurrentUser(userAuth);
      });
    return unsubscribeFromAuth();
  }, [setCurrentUser]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Homepage />} />
          <Route path="shop/*" element={<Shop />} />
          <Route
            path="signin"
            element={currentUser ? <Navigate to="/" /> : <LoginAndRegister />}
          />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

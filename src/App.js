import "./App.scss";
import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import Checkout from "./pages/Checkout/Checkout";
import Authorization from "./pages/Authorization/Authorization";
import Nav from "./components/Nav/Nav.jsx";
import { UserContext } from "./contexts/UserContext";

const App = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Homepage />} />
          <Route path="shop/*" element={<Shop />} />
          <Route
            path="auth"
            element={currentUser ? <Navigate to="/" /> : <Authorization />}
          />
          <Route path="auth" element={<Authorization />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

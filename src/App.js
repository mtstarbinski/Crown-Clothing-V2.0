import "./App.scss";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChangedListener, createUserDocument } from "./utils/firebase/firebase.utils";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop.jsx";
import Checkout from "./pages/Checkout/Checkout";
import Authentication from "./pages/Authentication/Authentication";
import Nav from "./components/Nav/Nav.jsx";
import { setCurrentUser } from "./store/user/user.action.js";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocument(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Homepage />} />
          <Route path="shop/*" element={<Shop />} />
          <Route
            path="auth"
            element={ <Authentication />}
          />
          {/* currentUser ? <Navigate to="/" /> : */}
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

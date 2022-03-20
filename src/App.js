import { GlobalStyle } from "./global.styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChangedListener, createUserDocument } from "./utils/firebase/firebase.utils";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop.jsx";
import Checkout from "./pages/Checkout/Checkout";
import Authentication from "./pages/Authentication/Authentication";
import Nav from "./components/Nav/Nav.jsx";
import { setCurrentUser } from "./store/user/user.action.js";
import { selectCurrentUser } from "./store/user/user.selector";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

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
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Homepage />} />
          <Route path="shop/*" element={<Shop />} />
          <Route
            path="auth"
            element={ currentUser ? <Navigate to="/" /> : <Authentication />}
          />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

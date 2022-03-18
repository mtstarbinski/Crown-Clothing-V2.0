import "./App.scss";
import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop.jsx";
import Checkout from "./pages/Checkout/Checkout";
import Authentication from "./pages/Authentication/Authentication";
import Nav from "./components/Nav/Nav.jsx";
import { UserContext } from "./contexts/user.context";

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
            element={currentUser ? <Navigate to="/" /> : <Authentication />}
          />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

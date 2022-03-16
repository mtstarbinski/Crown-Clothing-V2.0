import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { UserProvider } from "./contexts/user.context";
import { CategoryProvider } from "./contexts/category.context";
import { ProductsProvider } from "./contexts/product.context";
import { CartProvider } from "./contexts/cart.context";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
        <CategoryProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoryProvider>
      </ProductsProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

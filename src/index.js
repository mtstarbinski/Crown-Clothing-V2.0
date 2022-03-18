import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/product.context";
import { CartProvider } from "./contexts/cart.context";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

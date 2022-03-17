import { createContext, useState, useEffect } from "react";

// ON ADDING TO CART, CHECKS IF THE PRODUCT IS ALREADY IN THE CART - IF TRUE, INCREMENTS QUANTITY
const addCartItem = (cartItems, productToAdd) => {
  // FINDS PRODUCT THAT IS ALREADY IN CART
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  // IF FOUND, RETURNS PRODUCT OBJECT WITH INCREMENTED QUANTITY
  if (existingCartItem) {
    // GOES THROUGH CART ARRAY AND LOOKS FOR EXISTING CART ITEM TO INCREMENT
    return cartItems.map((cartItem) =>
      cartItem.id === existingCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // IF NO DUPLICATE IS FOUND, RETURN NEW ADDITION WITH A QUANTITY OF 1
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  openDropdown: false,
  setOpenDropdown: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartTotalItems: 0,
});

export const CartProvider = ({ children }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalItems, setCartTotalItems] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((currTotal, cartItem) => 
      currTotal + cartItem.quantity, 0
    );
    setCartTotalItems(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { openDropdown, setOpenDropdown, addItemToCart, cartItems, cartTotalItems };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

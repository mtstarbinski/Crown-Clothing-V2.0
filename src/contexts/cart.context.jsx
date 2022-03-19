import { createContext, useState, useEffect } from "react";

// ADDS ITEM TO CART
const addCartItem = (cartItems, productToAdd) => {
  // CHECKS IF PRODUCT IS ALREADY IN CART
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

// REMOVE 1 QUANTITY OF A CART ITEM
const removeCartItem = (cartItems, productToRemove) => {
  // CHECKS IF ITEM IS IN CART
  const existingCartItem = cartItems.find(
    (item) => item.id === productToRemove.id
  );

  // IF ITEM HAS A QUANTITY OF ONE, THEN DELETE THE ITEM
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== existingCartItem.id);
  }

  // DECREMENT ITEM QUANTITY
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeProduct = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
  openDropdown: false,
  setOpenDropdown: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeEntireProductFromCart: () => {},
  clearCart: () => {},
  cartTotalItems: 0,
  cartTotalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalItems, setCartTotalItems] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (currTotal, cartItem) => currTotal + cartItem.quantity,
      0
    );

    setCartTotalItems(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartPrice = cartItems.reduce(
      (currTotal, cartItem) => currTotal + cartItem.quantity * cartItem.price,
      0
    );
    
    setCartTotalPrice(newCartPrice);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const removeEntireProductFromCart = (cartItemToClear) => {
    setCartItems(removeProduct(cartItems, cartItemToClear));
  };

  const clearCart = () =>{
    setCartItems([]);
  }

  const value = {
    openDropdown,
    setOpenDropdown,
    addItemToCart,
    removeItemFromCart,
    removeEntireProductFromCart,
    cartItems,
    cartTotalItems,
    cartTotalPrice,
    clearCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

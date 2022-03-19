import { createContext, useState, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';

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

const clearCart = (cartItems) => {
  return cartItems = []
}

const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_CART_COUNT: 'SET_CART_COUNT',
  SET_CART_TOTAL: 'SET_CART_TOTAL',
};

const INITIAL_STATE = {
  openDropdown: false,
  cartItems: [],
  cartTotalItems: 0,
  cartTotalPrice: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};


export const CartContext = createContext({
  openDropdown: false,
  setOpenDropdown: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeEntireProductFromCart: () => {},
  clearCartItems: () => {},
  cartTotalItems: 0,
  cartTotalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const [{ cartTotalItems, cartTotalPrice, cartItems}, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const updateCartItemsReducer = (cartItems) => {
    const newCartCount = cartItems.reduce(
      (currTotal, cartItem) => currTotal + cartItem.quantity,
      0
    );

    const newCartPrice = cartItems.reduce(
      (currTotal, cartItem) => currTotal + cartItem.quantity * cartItem.price,
      0
    );

    const payload = {
      cartItems,
      cartTotalItems: newCartCount,
      cartTotalPrice: newCartPrice,
    };

    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const removeEntireProductFromCart = (cartItemToClear) => {
    const newCartItems = removeProduct(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
  };

  const clearCartItems = () =>{
    const newCartItems = clearCart(cartItems);
    updateCartItemsReducer(newCartItems);
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
    clearCartItems,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

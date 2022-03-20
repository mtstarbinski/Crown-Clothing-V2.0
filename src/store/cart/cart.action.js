import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

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
  return (cartItems = []);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeEntireProductFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = removeProduct(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearCartItems = (cartItems) => {
  const newCartItems = clearCart(cartItems);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

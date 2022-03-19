import { createContext, useEffect, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

import { SHOP_DATA } from "../data/shop.data";

export const ProductsContext = createContext({
  products: {}
});

const PRODUCTS_ACTION_TYPE = {
  SET_PRODUCTS: 'SET_PRODUCTS',
};

const INITIAL_STATE = {
  products: {},
}

const productsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACTION_TYPE.SET_PRODUCTS:
      return { ...state, products: payload };
      default:
        throw new Error(`Unhandled type ${type} in productsReducer`)
  }
}

export const ProductsProvider = ({ children }) => {
  const [{ products }, dispatch ] = useReducer(
    productsReducer,
    INITIAL_STATE
  );

  const setProducts = (products) =>
    dispatch(
      createAction(PRODUCTS_ACTION_TYPE.SET_PRODUCTS, products)
    );

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setProducts(categoryMap);
    }
    getCategoriesMap();
  }, [])

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

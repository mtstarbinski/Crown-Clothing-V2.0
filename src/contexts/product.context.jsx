import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../firebase/firebase.utils";

import { SHOP_DATA } from "../data/shop.data";

export const ProductsContext = createContext({
  products: {}
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({});

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

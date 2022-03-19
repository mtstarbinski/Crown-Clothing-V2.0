import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import { Routes, Route } from "react-router-dom";
import StoreOverview from "../../components/Store-Overview/StoreOverview";
import Category from "../Category/Category";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setProducts } from '../../store/products/products.action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProductsMap = async () => {
      const productsArray = await getCategoriesAndDocuments('categories');
      dispatch(setProducts(productsArray));
    };

    getProductsMap();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<StoreOverview/>} />
        <Route path=":category" element={<Category/>} />
      </Routes>
    </>
  );
};

export default Shop;

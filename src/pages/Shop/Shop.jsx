import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";
import StoreOverview from "../../components/Store-Overview/StoreOverview";
import Category from "../Category/Category";
import { fetchProductsStart } from "../../store/products/products.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<StoreOverview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </>
  );
};

export default Shop;

import React from "react";
import { Routes, Route } from "react-router-dom";
import StoreOverview from "../../components/Store-Overview/StoreOverview";
import Category from "../Category/Category";

const Shop = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<StoreOverview/>} />
        <Route path=":categoryId" element={<Category/>} />
      </Routes>
    </div>
  );
};

export default Shop;

import React from "react";
import { Routes, Route } from "react-router-dom";
import StoreOverview from "../../components/Store-Overview/StoreOverview";
import Category from "../Category/Category";

const Shop = () => {
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

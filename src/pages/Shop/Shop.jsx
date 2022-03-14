import React from "react";
import { Routes, Route } from "react-router-dom";
import CollectionsOverview from "../../components/Collections-Overview/CollectionsOverview";
import Collection from "../Collection/Collection";

const Shop = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionsOverview/>} />
        <Route path=":collectionId" element={<Collection/>} />
      </Routes>
    </div>
  );
};

export default Shop;

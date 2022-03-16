import React from "react";
import "./CategoryPreview.style.scss";
import ProductCard from "../Product-Card/ProductCard";

const CategoryPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <ProductCard key={item.id} item={item}/>
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;

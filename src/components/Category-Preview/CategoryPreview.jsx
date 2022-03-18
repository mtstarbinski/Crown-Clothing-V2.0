import React from "react";
import "./CategoryPreview.style.scss";
import ProductCard from "../Product-Card/ProductCard";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="collection-preview">
      <Link to={`${title}`} className="title">{title.toUpperCase()}</Link>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map(item => (
            <ProductCard key={item.id} item={item}/>
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;

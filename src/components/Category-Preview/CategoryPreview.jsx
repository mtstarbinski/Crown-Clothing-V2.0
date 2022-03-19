import React from "react";
import { CollectionPreview, Title, Preview } from "./CategoryPreview.style";
import ProductCard from "../Product-Card/ProductCard";

const CategoryPreview = ({ title, products }) => {
  return (
    <CollectionPreview>
      <Title to={`${title}`}>{title.toUpperCase()}</Title>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map(item => (
            <ProductCard key={item.id} item={item}/>
          ))}
      </Preview>
    </CollectionPreview>
  );
};

export default CategoryPreview;

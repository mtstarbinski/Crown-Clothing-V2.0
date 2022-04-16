import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { CategoryContainer, Title } from "./Category.style";
import ProductCard from "../../components/Product-Card/ProductCard";
import Spinner from "../../components/Spinner/Spinner";
import { useParams } from "react-router-dom";
import {
  selectProductsMap,
  selectProductsAreLoading,
} from "../../store/products/products.selector";

const Category = () => {
  const productsMap = useSelector(selectProductsMap);
  const isLoading = useSelector(selectProductsAreLoading);
  let { category } = useParams();
  const [selected, setSelected] = useState(productsMap[category]);

  useEffect(() => {
    setSelected(productsMap[category]);
  }, [category, productsMap]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {selected &&
            selected.map((item) => <ProductCard key={item.id} item={item} />)}
        </CategoryContainer>
      )}
    </>
  );
};

export default Category;

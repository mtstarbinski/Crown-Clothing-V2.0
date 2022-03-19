import { useContext, useState, useEffect } from "react";
import { CategoryContainer, Title } from "./Category.style";
import ProductCard from "../../components/Product-Card/ProductCard";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/product.context";

const Category = () => {
  const { products } = useContext(ProductsContext);
  let { category } = useParams();
  const [selected, setSelected] = useState(products[category]);

  useEffect(() => {
    setSelected(products[category]);
  }, [category, products]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {selected &&
          selected.map((item) => <ProductCard key={item.id} item={item} />)}
      </CategoryContainer>
    </>
  );
};

export default Category;

import { useContext, useState, useEffect } from "react";
import "./Category.style.scss";
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
    <div className="category-page">
      <h2 className='title'>{category.toUpperCase()}</h2>
      <div className="items">
        {selected &&
          selected.map((item) => <ProductCard key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Category;

import { useContext } from "react";
import CategoryPreview from "../Category-Preview/CategoryPreview";
import { ProductsContext } from "../../contexts/product.context";

const StoreOverview = () => {
  const { products } = useContext(ProductsContext)

  return (
    <>
     {Object.keys(products).map(title => {
       const items = products[title];
       return <CategoryPreview key={title} title={title} products={items} />
     })}
    </>
  );
};

export default StoreOverview;

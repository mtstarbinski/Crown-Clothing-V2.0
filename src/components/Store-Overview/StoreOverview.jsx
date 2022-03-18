import { useContext } from "react";
import "./StoreOverview.styles.scss";
import CategoryPreview from "../Category-Preview/CategoryPreview";
import { ProductsContext } from "../../contexts/product.context";

const StoreOverview = () => {
  const { products } = useContext(ProductsContext)

  return (
    <div className="collections-overview">
     {Object.keys(products).map(title => {
       const items = products[title];
       return <CategoryPreview key={title} title={title} products={items} />
     })}
    </div>
  );
};

export default StoreOverview;

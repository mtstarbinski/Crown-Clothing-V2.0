import { useContext } from "react";
import "./StoreOverview.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CategoryPreview from "../Category-Preview/CategoryPreview";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import { ProductsContext } from "../../contexts/product.context";

const StoreOverview = () => {
  const { products } = useContext(ProductsContext)
  const pro = Object.keys(products).map(key => products[key])

  return (
    <div className="collections-overview">
      {pro.map(({ id, ...collectionProps }) => (
        <CategoryPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

export default StoreOverview;

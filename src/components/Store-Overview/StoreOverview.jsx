import { useSelector } from 'react-redux';
import { selectProductsMap } from '../../store/products/products.selector';
import CategoryPreview from "../Category-Preview/CategoryPreview";

const StoreOverview = () => {
  const products = useSelector(selectProductsMap);

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

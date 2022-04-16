import { useSelector } from 'react-redux';
import { selectProductsMap, selectProductsAreLoading } from '../../store/products/products.selector';
import CategoryPreview from "../Category-Preview/CategoryPreview";
import Spinner from '../Spinner/Spinner';

const StoreOverview = () => {
  const products = useSelector(selectProductsMap);
  const isLoading = useSelector(selectProductsAreLoading);

  return (
    <>
      {isLoading ? <Spinner/> :
        Object.keys(products).map(title => {
       const items = products[title];
       return <CategoryPreview key={title} title={title} products={items} />
     })}
    </>
  );
};

export default StoreOverview;

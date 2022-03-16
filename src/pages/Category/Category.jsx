import { useContext } from 'react'
import "./Category.style.scss";
import ProductCard from '../../components/Product-Card/ProductCard';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCollection } from '../../redux/shop/shop.selector';
import { ProductsContext } from '../../contexts/product.context';



const Category = () => {
  const { products } = useContext(ProductsContext)
  let params = useParams();

  const selected = (products[params.categoryId]);
  const { title, items } = selected;

  return (
    <div className='category-page'>
        <h2 className='title'>{title}</h2>
        <div className="items">
          {items.map(item => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

    </div>
  )
}

export default Category;
import { useContext } from "react";
import "./ProductCard.style.scss";
import Button from "../Button/Button";
import { CartContext } from "../../contexts/cart.context";


const ProductCard = ({item}) => {
  const { name, price, imageUrl } = item;
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="product-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType='inverted' onClick={() => addItemToCart(item)}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;

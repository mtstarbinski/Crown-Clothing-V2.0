import { useContext } from "react";
import {
  ProductContainer,
  ProductFooter,
  Name,
  Price,
  Image,
  ProductButton,
} from "./ProductCard.style.js";

import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ item }) => {
  const { name, price, imageUrl } = item;
  const { addItemToCart } = useContext(CartContext);

  return (
    <ProductContainer>
      <Image productImage={imageUrl} />
      <ProductFooter >
        <Name>{name}</Name>
        <Price>{price}</Price>
      </ProductFooter>
      <ProductButton onClick={() => addItemToCart(item)}>
        Add to cart
      </ProductButton>
    </ProductContainer>
  );
};

export default ProductCard;

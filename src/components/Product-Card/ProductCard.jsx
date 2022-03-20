import { useDispatch, useSelector } from "react-redux";
import {
  ProductContainer,
  ProductFooter,
  Name,
  Price,
  Image,
  ProductButton,
} from "./ProductCard.style.js";

import { addItemToCart } from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";

const ProductCard = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  return (
    <ProductContainer>
      <Image productImage={imageUrl} />
      <ProductFooter >
        <Name>{name}</Name>
        <Price>{price}</Price>
      </ProductFooter>
      <ProductButton onClick={() => dispatch(addItemToCart(cartItems, item))}>
        Add to cart
      </ProductButton>
    </ProductContainer>
  );
};

export default ProductCard;

import { useDispatch, useSelector } from "react-redux";
import {
  ProductContainer,
  ProductFooter,
  Name,
  Price,
} from "./ProductCard.style.js";

import { addItemToCart } from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import Button, {BUTTON_TYPE_CLASSES} from "../Button/Button.jsx";

const ProductCard = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  return (
    <ProductContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ProductFooter>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </ProductFooter>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={() => dispatch(addItemToCart(cartItems, item))}
      >
        Add to cart
      </Button>
    </ProductContainer>
  );
};

export default ProductCard;

import { useDispatch, useSelector } from "react-redux";
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Arrow,
  Value,
  Quantity,
  RemoveButton,
} from "./CheckoutItem.style";
import {
  addItemToCart,
  removeEntireProductFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <BaseSpan className="name">{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={() => dispatch(removeItemFromCart(cartItems, cartItem))}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => dispatch(addItemToCart(cartItems, cartItem))}>
          &#10095;
        </Arrow>
      </Quantity>
      <BaseSpan className="price">{price}</BaseSpan>
      <RemoveButton
        onClick={() => dispatch(removeEntireProductFromCart(cartItems, cartItem))}
      >
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

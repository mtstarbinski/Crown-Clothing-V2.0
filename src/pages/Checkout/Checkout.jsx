import { useSelector } from "react-redux";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  Warning
} from './Checkout.style';
import CheckoutItem from "../../components/Checkout-Item/CheckoutItem";
import StripeButton from "../../components/Stripe-Button/StripeButton";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotalPrice = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <Total>{`TOTAL: $${cartTotalPrice}`}</Total>
      <Warning>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
      </Warning>
      <StripeButton price={cartTotalPrice}></StripeButton>
    </CheckoutContainer>
  );
};

export default Checkout;

import { useContext } from "react";
import "./Checkout.style.scss";
import CheckoutItem from "../../components/Checkout-Item/CheckoutItem";
import StripeButton from "../../components/Stripe-Button/StripeButton";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems, cartTotalPrice } = useContext(CartContext);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>{`TOTAL: $${cartTotalPrice}`}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
      </div>
      {/* <StripeButton price={total}></StripeButton> */}
    </div>
  );
};

export default Checkout;

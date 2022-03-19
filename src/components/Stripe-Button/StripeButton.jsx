import StripeCheckout from "react-stripe-checkout";
import { useContext } from 'react';
import { CartContext } from "../../contexts/cart.context";

const StripeButton = ({ price }) => {
  const { clearCart } = useContext(CartContext);
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_KEY;
  const onToken = (token) => {
    clearCart();
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddresss
      shippingAddress
      image={"https://svgshare.com/i/CUz.svg"}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;

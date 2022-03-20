import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from 'react-redux';
import { clearCartItems } from "../../store/cart/cart.action";

const StripeButton = ({ price }) => {
  const dispatch = useDispatch();
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_KEY;
  const onToken = (token) => {
    dispatch(clearCartItems());
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

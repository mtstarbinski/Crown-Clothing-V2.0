import { useContext } from "react";
import "./CheckoutItem.style.scss";
import { CartContext } from "../../contexts/cart.context"

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, removeEntireProductFromCart } = useContext(CartContext);

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeEntireProductFromCart(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

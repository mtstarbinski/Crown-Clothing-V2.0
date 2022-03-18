import { useContext } from "react";
import "./CartDropdown.style.scss";
import Button from "../Button/Button";
import CartItem from "../Cart-Item/CartItem";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { setOpenDropdown, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          navigate("checkout");
          setOpenDropdown(false);
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;

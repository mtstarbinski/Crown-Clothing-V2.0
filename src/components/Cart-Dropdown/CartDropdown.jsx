import { useContext } from "react";
import { connect } from "react-redux";
import "./CartDropdown.style.scss";
import Button from "../Button/Button";
import CartItem from "../Cart-Item/CartItem";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
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

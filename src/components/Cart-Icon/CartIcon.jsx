import { useContext } from "react";
import "./CartIcon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { openDropdown, setOpenDropdown} = useContext(CartContext);

  return (
    <div className="cart-icon" onClick={() => setOpenDropdown(!openDropdown)}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;

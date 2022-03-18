import { useContext } from "react";
import "./CartIcon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { openDropdown, setOpenDropdown, cartTotalItems } = useContext(CartContext);

  return (
    <div className="cart-icon" onClick={() => setOpenDropdown(!openDropdown)}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartTotalItems}</span>
    </div>
  );
};

export default CartIcon;

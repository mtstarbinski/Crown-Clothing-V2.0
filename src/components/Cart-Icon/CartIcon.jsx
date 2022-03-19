import { useContext } from "react";
import { CartIconContainer, Icon, ItemCount } from "./CartIcon.style";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { openDropdown, setOpenDropdown, cartTotalItems } = useContext(CartContext);

  return (
    <CartIconContainer onClick={() => setOpenDropdown(!openDropdown)}>
      <Icon/>
      <ItemCount>{cartTotalItems}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

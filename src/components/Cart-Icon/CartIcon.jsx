import { useSelector, useDispatch } from "react-redux";
import { CartIconContainer, Icon, ItemCount } from "./CartIcon.style";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectIsCartOpen, selectCartCount } from "../../store/cart/cart.selector";

const CartIcon = () => {
  const openDropdown = useSelector(selectIsCartOpen);
  const cartTotalItems = useSelector(selectCartCount);
  const dispatch = useDispatch();
  

  return (
    <CartIconContainer onClick={() => dispatch(setIsCartOpen(!openDropdown))}>
      <Icon/>
      <ItemCount>{cartTotalItems}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

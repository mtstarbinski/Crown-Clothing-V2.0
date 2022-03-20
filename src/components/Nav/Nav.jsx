import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./Nav.style";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../Cart-Icon/CartIcon";
import CartDropdown from "../Cart-Dropdown/CartDropdown";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Nav = () => {
  const currentUser = useSelector(selectCurrentUser);
  const openDropdown = useSelector(selectIsCartOpen);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={() => signOutUser()}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {openDropdown && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Nav;

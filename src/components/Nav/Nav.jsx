import { useContext } from "react";
import { Outlet } from "react-router-dom";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./Nav.style";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../Cart-Icon/CartIcon";
import CartDropdown from "../Cart-Dropdown/CartDropdown";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";

const Nav = () => {
  const { currentUser } = useContext(UserContext);
  const { openDropdown } = useContext(CartContext);

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

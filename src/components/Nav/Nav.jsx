import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Nav.style.scss";
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
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <div className="option" onClick={() => signOutUser()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {openDropdown && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Nav;

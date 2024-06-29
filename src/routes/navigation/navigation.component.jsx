import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import {ReactComponent as Logo} from "../../assets/logo.svg"
import ProfileImage from "../../components/profile-image/profile-image.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import "./navigation.component.scss"

const Navigation = () =>{

    const{currentUser} = useContext(UserContext);
    const{isCartOpen} = useContext(CartContext);

    return(
        <div>
            <Fragment>
            <div className="navigation">
                <div className="nav-container">
                <Link className="nav-logo-container" to="/">
                    <div className="nav-logo">
                        <Logo className='logo' />
                    </div>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop"> 
                    SHOP
                    </Link>
                    {currentUser ? (
                        <div className="profile-links">
                            <Link className="nav-link" to="/profile"> PROFILE</Link>
                            <CartIcon />
                        </div>
                        ) : ( <Link className="nav-link" to="/auth"> SIGN IN</Link>)}
                </div>
                </div>
                {isCartOpen && <CartDropDown />}
            </div>
            </Fragment>
            <Outlet />
        </div>
    );
}

export default Navigation;
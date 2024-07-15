import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import {ReactComponent as Logo} from "../../assets/logo.svg"
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import './navigation.component.style.scss'

const Navigation = () =>{

    const{currentUser} = useContext(UserContext);
    const{isCartOpen} = useContext(CartContext);

    return(
        <div>
            <Fragment>
            <div className="navigation ">
                <div className="container  ">
                <div className="container  d-flex justify-content-between flex-row">
                <Link className="logo-container" to="/">
                        <Logo className='logo' />
                </Link>
                <div className="d-flex align-items-center  gap-3 " >
                    {currentUser ? (<Link className="btn" to='/add-item'>ADD</Link>) : ('')}
                    <Link className="btn" to="/shop"> SHOP</Link>
                    {currentUser ? (
                        <div className="d-flex align-items-center gap-3">
                            <Link className="btn" to="/profile"> PROFILE</Link>
                            <CartIcon />
                        </div>
                        ) : ( <Link className="btn" to="/auth"> SIGN IN</Link>)}
                </div>
                </div>
                <div className="d-flex justify-content-end">
                {isCartOpen && <CartDropDown />}
                </div>
                </div>
            </div>
            </Fragment>
            <Outlet />
        </div>
    );
}

export default Navigation;
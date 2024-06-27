import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import {ReactComponent as Logo} from "../../assets/logo.svg"
import "./navigation.component.scss"

const Navigation = () =>{

    const{currentUser} = useContext(UserContext);

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
                        <Link className="nav-link" to="/profile">PROFILE</Link>
                        ) : ( <Link className="nav-link" to="/auth"> SIGN IN</Link>)}
                </div>
                </div>
            </div>
            </Fragment>
            <Outlet />
        </div>
    );
}

export default Navigation;
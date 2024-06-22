import { Outlet, Link } from "react-router-dom";
import "./navigation.component.scss"
import {ReactComponent as Logo} from "../../assets/logo.svg"

const Navigation = () =>{
    return(
        <div>
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
                    <Link className="nav-link" to="/sign-in"> 
                    SIGN IN
                    </Link>
                </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default Navigation;
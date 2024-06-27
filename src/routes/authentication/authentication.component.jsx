import { Outlet } from "react-router-dom";
import { signInWitGooglePopup, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";
import "./authentication.component.style.scss"

const Auth = () =>{
    return (
        <div className="auth-container">
           <div className="auth-contents">
           <SignIn />
           <SignUp />
           </div>
            <Outlet />
        </div>
    )
}

export default Auth;
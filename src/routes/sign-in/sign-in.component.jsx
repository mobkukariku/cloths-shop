import { Outlet } from "react-router-dom";
import { signInWitGooglePopup, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in.component.style.scss"

const SignIn = () =>{
    const logGoogleUser = async ()=>{
        const {user}= await signInWitGooglePopup();
        createUserDocFromAuth(user);
    }
    return (
        <div className="sign-in">
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google
            </button>
            <SignUp />
            <Outlet />
        </div>
    )
}

export default SignIn;
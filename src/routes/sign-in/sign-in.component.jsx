import { Outlet } from "react-router-dom";
import { signInWitGooglePopup, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () =>{
    const logGoogleUser = async ()=>{
        const {user}= await signInWitGooglePopup();
        createUserDocFromAuth(user);
    }
    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google
            </button>
            <Outlet />
        </div>
    )
}

export default SignIn;
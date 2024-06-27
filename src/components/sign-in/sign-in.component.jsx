
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {createUserDocFromAuth, signInWitGooglePopup, AuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in.component.style.scss"



const defaultFormFields = 
{
    email:"",
    password:"",
}


const SignIn = () =>{
    const[formFields, setFormFields] = useState(defaultFormFields);
    const{email, password} = formFields;
    const navigate = useNavigate();

    

    const resetFormField = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

     
        try {
            await AuthUserWithEmailAndPassword(email, password);
            resetFormField();
            navigate('/profile');

        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                case 'auth/invalid-credential':
                    alert('invalid credential provided');
                    break;
                default:
                    console.log(error);
            }
        }
        

    }

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormFields({...formFields, [name]:value});
    }

    const logGoogleUser = async ()=>{
        const {user}= await signInWitGooglePopup();
        navigate('/profile');
        
    }

    return(
        <div className="sign-in-container">
            <div className="sign-in-content"> 
            <h1>Alredy have account?</h1>
            <span>Sign In with your Email and Password or Google</span>
            <div className="sign-in-form-content">
            <form onSubmit={handleSubmit} className="sign-in-form">
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
               <div className="sign-in-buttons">
               <Button childrenText="Sign In" buttonType="default" type="submit"  />
               <Button buttonType="google" childrenText="Sign in with Google"onClick={logGoogleUser}/>
               </div>
            </form>
            </div>
            </div>
        </div>
    )
}

export default SignIn;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-up.component.style.scss"


const defaultFormFields = 
{
    displayName:"",
    email:"",
    password:"",
    confirmPassword:""
}

const SignUp = () =>{
    const[formFields, setFormFields] = useState(defaultFormFields);
    const{displayName, email, password, confirmPassword} = formFields;
    const navigate = useNavigate();


    const resetFormField = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if(password !== confirmPassword){
            alert("passwords do not match");
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocFromAuth(user, {displayName});
            resetFormField();
            navigate('/profile');
        }catch(error){
            if(error.code==='auth/email-already-in-use') {
                alert("Cannot create user. Email already in use");
            }
            console.error("user creation encounted an error", error);
        }

    }

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormFields({...formFields, [name]:value});
    }

    return(
        <div className="sign-up-container">
            <div className="sign-up-content"> 
            <h1>Do you not have account?</h1>
            <span>Sign Up with your Email and Password</span>
            <div className="sign-up-form-content">
            <form onSubmit={handleSubmit} className="sign-up-form">
                <FormInput label="Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                <FormInput label="Confirm password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <Button childrenText="Sign Up" buttonType="default" type="submit"  />
            </form>
            </div>
            </div>
        </div>
    )
}

export default SignUp;
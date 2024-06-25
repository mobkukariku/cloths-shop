
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

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
        <div>
            <h1>Sign Up with your Email and Password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput label="Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                <FormInput label="Confirm password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;
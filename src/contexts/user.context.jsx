import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocFromAuth} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const UserProvider = ({children}) =>{
    const[currentUser, setCurrentUser] = useState(null);

    useEffect(()=>{
       const unsubscribe = onAuthStateChangedListener((user) => {
        if(user){
            createUserDocFromAuth(user);

        }
        setCurrentUser(user);
       });

       return unsubscribe;
    }, []);

    const value = {currentUser, setCurrentUser};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}
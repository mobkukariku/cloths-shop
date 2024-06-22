import { initializeApp } from "firebase/app";

import {getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyAib3I4NxQmu3-yikjPuPhLx0FJTMlPP9E",
  
    authDomain: "cloths-shop-db-3fac7.firebaseapp.com",
  
    projectId: "cloths-shop-db-3fac7",
  
    storageBucket: "cloths-shop-db-3fac7.appspot.com",
  
    messagingSenderId: "514706518624",
  
    appId: "1:514706518624:web:caf98357f7ab2ec2c74905"
  
  };
  

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInWitGooglePopup = () => signInWithPopup(auth, provider);
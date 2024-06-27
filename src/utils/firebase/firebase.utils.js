import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc, updateDoc} from "firebase/firestore"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


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

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, addInf)=>{

    if(!userAuth) return;


    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    
    if(!userSnapshot.exists()){

        const {displayName, email} = userAuth;
        const CreatedData = new Date()

        try{
            await setDoc(userDocRef, {displayName, email, CreatedData, birtdayDate:'',profileIMG:'', ...addInf});
        }catch(error){
            console.error("Error with setting user doc.")
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) =>{
    if(!email || !password){
        return;
    }
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const AuthUserWithEmailAndPassword  = async (email, password) => {
    if(!email || !password){
        return;
    }
    
    return await signInWithEmailAndPassword(auth, email, password);
}

export const UserSignOut = async () => await signOut(auth); 

export const onAuthStateChangedListener =  (callback) => {
    
    return onAuthStateChanged(auth, callback);
}

export const getUserProfile = async (userAuth) =>{
    const userDocRef = doc(db, "users", userAuth.uid);
    try{
        const userDoc = await getDoc(userDocRef);
        if(userDoc.exists()){
            return userDoc.data();
        }else{
            alert("No sucj Document")
        }
    }catch(error){
        console.error("Error fetching user profile: ", error);
    }
    return;
}

export const updateUserProfile = async (userAuth, updatedData) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    try{
        await updateDoc(userDocRef, updatedData);
        alert("User profile updated successfully");
    }catch(error){
        console.error("Error updating user profile: ", error);
    }
}

export const uploadProfileImage = async (userAuth, file) =>{
    const storage = getStorage();
    const storageRef = ref(storage, `profileImages/${userAuth.uid}/${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;

}

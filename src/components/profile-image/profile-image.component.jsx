import { useContext, useEffect, useState} from "react";
import { UserContext } from "../../contexts/user.context";
import { getUserProfile } from "../../utils/firebase/firebase.utils";



const ProfileImage = () =>{

    const defaultPhotoField = {
        profileIMG: ''
    }

    const {photoImage, setPhotoImage}= useState(defaultPhotoField); 
    const {profileIMG} = photoImage;

    const{currentUser} = useContext(UserContext);


    useEffect(() => {
         const fetchUserData = async () =>{
            if(currentUser){
                const userData = await getUserProfile(currentUser);
                if(userData){
                    setPhotoImage({
                        profileIMG: userData.profileIMG || ''
                    });
                }
            }
        }
        
        fetchUserData();
    }, [currentUser]);


    return(
        <div>
            <img src={profileIMG} alt="." />
        </div>
    )
}

export default ProfileImage;
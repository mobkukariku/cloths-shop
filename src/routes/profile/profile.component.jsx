import { UserContext } from "../../contexts/user.context";
import { useContext, useState, useEffect } from "react";
import { UserSignOut, updateUserProfile, getUserProfile, uploadProfileImage } from "../../utils/firebase/firebase.utils";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import "./profile.component.style.scss";

const UserProfile = () => {
    const defaultFormFields = {
        displayName: '',
        email: '',
        birthday: '00.00.00',
        profileIMG: ''
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, birthday, profileIMG } = formFields;

    const { currentUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await UserSignOut();
        navigate("/auth");
    }

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const profileImageUrl = await uploadProfileImage(currentUser, file);
                setFormFields({ ...formFields, profileIMG: profileImageUrl });
            } catch (error) {
                console.error("Error uploading profile image: ", error);
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateUserProfile(currentUser, formFields);
        } catch (error) {
            console.error("Error updating profile: ", error);
        }
    }

    const handleImgClick = () => {
        document.getElementById("fileInput").click();
    }

    useEffect(() => {
        const fetchUserData = async () => {
            if (currentUser) {
                const userData = await getUserProfile(currentUser);
                if (userData) {
                    setFormFields({
                        displayName: userData.displayName || '',
                        email: userData.email || '',
                        birthday: userData.birthday || '00.00.0000',
                        profileIMG: userData.profileIMG || 'https://firebasestorage.googleapis.com/v0/b/cloths-shop-db-3fac7.appspot.com/o/profileImages%2FdefaultIMG%2FFrame%201.png?alt=media&token=c0a8a655-1fe7-449b-9baa-5339ea436b7a'
                    });
                }
            }
        };

        fetchUserData();
    }, [currentUser]);

    return (
        <div className="profile-container">
            <form onSubmit={handleSubmit} className="profile-form">
                <div className="form-input-img">
                    {profileIMG && <img src={profileIMG} alt="Profile" className="profile-image" onClick={handleImgClick}/>}
                    <input id="fileInput" type="file" onChange={handleImageChange} accept="image/*" name="profileIMG" style={{ display: "none" }} />
                </div>
                <div className="form-input-text">
                    <p>PROFILE</p>
                    <FormInput label="Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />
                    <FormInput label="Birthday" type="date" required onChange={handleChange} name="birthday" value={birthday} />
                    <Button buttonType="default" childrenText="Change"/>
                </div>
            </form>
            <div className="profile-sign-out"><Button buttonType="default" childrenText="SIGN OUT" onClick={handleSignOut}>SIGN OUT</Button></div>
        </div>
    )
}

export default UserProfile;

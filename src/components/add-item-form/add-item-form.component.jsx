import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addItem } from "../../utils/firebase/fireStore.service";
import { storage } from "../../utils/firebase/firebase.utils";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import './add-item-form.component.style.scss';

const defaultFormFields = {
    photoFile: null,
    photoURL: "https://firebasestorage.googleapis.com/v0/b/cloths-shop-db-3fac7.appspot.com/o/profileImages%2FdefaultIMG%2FFrame%201.png?alt=media&token=c0a8a655-1fe7-449b-9baa-5339ea436b7a",
    name: "",
    price: "",
    category: "",
    desc: "",
}

const AddItemForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { photoFile, photoURL, name, price, category, desc } = formFields;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const storageRef = ref(storage, `photosOfItems/${file.name}`);
                await uploadBytes(storageRef, file);
                const url = await getDownloadURL(storageRef);
                setFormFields({ ...formFields, photoFile: file, photoURL: url });
            } catch (error) {
                console.error("Error uploading file: ", error);
            }
        }
    }
    const handleImgClick = () => {
        document.getElementById("productFileInput").click();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await addItem(photoURL, name, price, category, desc);
            setFormFields(defaultFormFields);
        } catch (error) {
            console.error("Error adding item: ", error);
        }
    }

    return (
        <div className="add-item-container">
            <p className="add-item-title">ADD PRODUCT</p>
            <form className="add-item-form" onSubmit={handleSubmit}>
                <div className="form-grid-1">
                    {photoURL && <img src={photoURL} alt="Selected" onClick={handleImgClick} />}
                    <input type="file" id="productFileInput" onChange={handleFileChange} style={{display:'none'}} />
                </div>
                <div className="form-grid-2">
                    <FormInput label='Name' type='text' required onChange={handleChange} name="name" value={name} />
                    <select name="category" value={category} onChange={handleChange}>
                        <option value="">Choose Category</option>
                        <option value="hats">HATS</option>
                        <option value="outwear">OUTWEAR</option>
                        <option value="shoes">SHOES</option>
                        <option value="pants">PANTS</option>
                        <option value="accessories">ACCESSORIES</option>
                    </select>
                    <FormInput label='Price' type='text' required onChange={handleChange} name="price" value={price} />
                </div>
                <div className="form-grid-3"> 
                    <textarea
                        id="desc"
                        name="desc"
                        value={desc}
                        onChange={handleChange}
                        placeholder="Item Description"
                    ></textarea>
                </div>
                <div className="item-form-button">
                    <Button childrenText='Submit' buttonType='default' />
                </div>
            </form>
        </div>
    );
}

export default AddItemForm;

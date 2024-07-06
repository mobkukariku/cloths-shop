import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase.utils";


export const addItem = async (photoURL, name, price, category, desc) => {
    try {
        const docRef = await addDoc(collection(db, "items"), {
            photo: photoURL,
            name,
            price,
            category,
            description: desc
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


export const getItems = async () => {
    const itemsCollection = collection(db, "items");
    const querySnapshot = await getDocs(itemsCollection);
    const items = [];
    querySnapshot.forEach(doc => {
        items.push({id: doc.id, ...doc.data()});
    });

    return items;
}

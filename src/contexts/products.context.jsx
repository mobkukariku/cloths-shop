import { createContext, useEffect, useState } from "react";
import { getItems } from "../utils/firebase/fireStore.service";

export const ProductsContexts = createContext({
    products: []
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const itemsData = await getItems();
                setProducts(itemsData);
                setLoading(false); 
            } catch (error) {
                console.error("Error fetching items: ", error);
                setProducts([]); 
                setLoading(false); 
            }
        };
        fetchItems();
    }, []);



    if (loading) {
        return <div>Loading...</div>;
    }

    const value = { products };

    return (
        <ProductsContexts.Provider value={value}>
            {children}
        </ProductsContexts.Provider>
    );
};

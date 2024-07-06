import {createContext, useState, useEffect } from "react";


const addCardItem = (cartItems, productToAdd) => {
    
    const existingCartItem = cartItems.find( (cartItem) => cartItem.id === productToAdd.id );


    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity+1}: cartItem);
    }


    return [...cartItems, {...productToAdd, quantity:1}];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id ===cartItemToRemove.id);
 
    if(existingCartItem.quantity===1){
        return cartItems.filter(cartItem =>cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity-1}: cartItem)
}

const deleteAllCartItem =(cartItems, cartItemToDelete) =>{
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToDelete.id);

    if(existingCartItem.quantity>=1){
        return cartItems.filter(cartItem =>cartItem.id !== cartItemToDelete.id);
    }

    return cartItems.map((cartItem) => cartItem.id === cartItemToDelete.id ? {...cartItem, quantity: cartItem.quantity-cartItem.quantity}: cartItem)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=>{},
    cartItems: [],
    addItemToCart: () =>{},
    removeItemFromCart: () =>{},
    cartCount:0,
    totalPrice:0,
});

export const CartProvider = ({children}) =>{
    const[isCartOpen, setIsCartOpen] = useState(false);
    const[cartItems, setCartItems] = useState([]);
    const[cartCount, setCartCount] = useState(0);
    const[totalPrice, setTotalPrice] = useState(0);

    useEffect(() =>{
        const newCartCount = cartItems.reduce((total, cartItem)=>total+cartItem.quantity, 0);
        setCartCount(newCartCount);
        const newTotalPrice = cartItems.reduce((total, cartItem) =>total+(cartItem.quantity*cartItem.price), 0);
        setTotalPrice(newTotalPrice);
    },[cartItems])
    
    const addItemToCart = (productToAdd) =>{
        setCartItems(addCardItem(cartItems, productToAdd));
    }
    const removeItemFromCart = (productToRemove) =>{
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const deleteAllItemFromCart = (productsToDelete) =>{
        setCartItems(deleteAllCartItem(cartItems, productsToDelete));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, deleteAllItemFromCart, totalPrice}; 
    
    return(<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}


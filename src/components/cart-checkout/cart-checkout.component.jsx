import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-checkout.component.style.scss"

const CartCheckOut = ({cartItem}) =>{
    const{name, quantity, photo,price} = cartItem;
    const {cartItems, addItemToCart, removeItemFromCart, deleteAllItemFromCart} = useContext(CartContext);
    return (
        <div className="cart-checkout-container">
            <img src={photo} alt={name} />
            <p>{name}</p>
            <div className="inc-degre-container">
                <span onClick={()=>removeItemFromCart(cartItem)}> ᐸ </span>
                <span>{quantity}</span>
                <span onClick={()=> addItemToCart(cartItem)}> ᐳ </span>
            </div>
            <span>{price} $</span>
            <span className="delete-btn" onClick={()=>deleteAllItemFromCart(cartItem)}>×</span>
        </div>
    )
}


export default CartCheckOut;
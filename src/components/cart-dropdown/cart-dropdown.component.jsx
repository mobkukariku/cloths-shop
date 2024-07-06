import { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component"
import "./cart-dropdown.component.style.scss";

const CartDropDown = () =>{
    const{cartItems, isCartOpen, setIsCartOpen} = useContext(CartContext);
    const navigate = useNavigate();
    const handleCartDropdown = () =>{
      setIsCartOpen(!isCartOpen);
      navigate("/checkout"); 
    }

    return (
        <div className='cart-dropdown-container'>
          <div className='cart-items'>
            {cartItems.length ? (
              cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
              ))
            ) : (
              <span className='empty-message'>Your cart is empty</span>
            )}
          </div>
          <Button childrenText="TO CHECKOUT" onClick={handleCartDropdown} buttonType="default"/>
        </div>
      );
    };

export default CartDropDown; 
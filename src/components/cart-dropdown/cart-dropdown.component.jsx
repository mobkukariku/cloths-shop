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
        <div className='rounded bg-light px-3 p-3 my-2 position-absolute z-3'>
          <div className='cart-items'>
            {cartItems.length ? (
              cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
              ))
            ) : (
              <span className="text-center m-5">Your cart is empty</span>
            )}
          </div>
          <div className="d-flex py-3 justify-content-center"><Button childrenText="TO CHECKOUT" onClick={handleCartDropdown} buttonType="default"/></div>
        </div>
      );
    };

export default CartDropDown; 
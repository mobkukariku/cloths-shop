import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout.component.style.scss'
import CartCheckOut from '../../components/cart-checkout/cart-checkout.component';

const CheckOut = () =>{
    const {cartItems, totalPrice} = useContext(CartContext);
    const totalCheck = cartItems.filter
    return(
        <div>
            <div className='checkout-container'>
                <div className='cart-checkout-container checkout-cart-title'>
                    <span>Product</span>
                    <span>Name</span>
                    <span>Count</span>
                    <span>Price</span>
                    <span>Delete</span>
                </div>
            {cartItems.map((cartItem) =>(
                <CartCheckOut key={cartItem.id} cartItem={cartItem}  />
            ))}
            </div>
            <div className='total-price-container'>
                <div className='total-price'><span>Total {totalPrice} $</span></div>
            </div>
        </div>
    );
}

export default CheckOut;
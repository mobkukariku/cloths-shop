import {ReactComponent as ShoppingIcon} from '../../assets/shopping-card-image.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.component.style.scss'

const CartIcon = () =>{
    const {isCartOpen, setIsCartOpen, cartItems, cartCount} = useContext(CartContext);

    const handleCartDropdown = () =>setIsCartOpen(!isCartOpen);
    return (
        <div className='cart-icon-container' onClick={handleCartDropdown}>
             <span className='item-count'>{cartCount}</span>
            <ShoppingIcon className='cart-icon' />
        </div>
    );
}

export default CartIcon;
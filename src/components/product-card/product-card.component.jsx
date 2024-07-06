import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import './product-card.component.style.scss'


const ProductCard = ({product}) =>{

    const {name, price, photo} = product;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return(
        <div className='product-card-container'>
            <div className='product-image'>
                <img src={photo} alt={name} />
            </div>
            <div className="product-card-footer">
                <Button buttonType="reverse" childrenText="TO BASKET"  onClick={addProductToCart}/>
                <div className='product-card-text'>
                    <span>{name}</span>
                    <span>{price}$</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
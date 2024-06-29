import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContexts } from "../../contexts/products.context";
import { useContext } from "react";
import './shop.component.style.scss'

const Shop = () =>{
    const{products} = useContext(ProductsContexts);
    
    return(
       <div className="products-container">
         <div className="products-cards">
            {products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
                ))}
        </div>
       </div>
    )
}

export default Shop;
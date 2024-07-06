import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContexts } from "../../contexts/products.context";
import { useContext } from "react";
import './shop.component.style.scss'
import FiltersItems from "../../components/filters/filters-items.component";

const Shop = () =>{
    const{products} = useContext(ProductsContexts);
    
    return(
       <div className="shop-container">
            <FiltersItems />
       </div>
    )
}

export default Shop;
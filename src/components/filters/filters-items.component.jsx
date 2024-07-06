import { useContext, useState } from 'react';
import ProductCard from '../product-card/product-card.component';
import { ProductsContexts } from '../../contexts/products.context';
import './filters-items.component.style.scss';
import Button from '../button/button.component';

const defaultParameters = {
    from: '',
    to: '',
    isHats: true,
    isOutwear: true,
    isShoes: true,
    isPants: true,
    isAccesories: true,
};

const FiltersItems = () => {
    const { products } = useContext(ProductsContexts);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [parameters, setParameters] = useState(defaultParameters);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const filtered = products.filter((item) => {
            const priceMatch = (!parameters.from || parseFloat(item.price) >= parseFloat(parameters.from)) && 
                               (!parameters.to || parseFloat(item.price) <= parseFloat(parameters.to));
            const categoryMatch = (parameters.isHats && item.category === 'hats') ||
                                  (parameters.isOutwear && item.category === 'outwear') ||
                                  (parameters.isShoes && item.category === 'shoes') ||
                                  (parameters.isPants && item.category === 'pants') ||
                                  (parameters.isAccesories && item.category === 'accessories');
            return priceMatch && categoryMatch;
        });

        setFilteredProducts(filtered);
    };

    console.log(filteredProducts);
    console.log(parameters);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setParameters({
            ...parameters,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return (
        <div className='filltered-containers'>
            <div className='filters-container'>
                <form onSubmit={handleSubmit} className='filters-form'>
                    <div className='filter-from-to'>
                        <label >From</label>
                        <input type="number" onChange={handleChange} name='from' value={parameters.from} />
                        <label >To</label>
                        <input type="number" onChange={handleChange} name='to' value={parameters.to} />
                    </div>
                    <div className='form-checkboxes-container'>
                       <div className='form-checkboxes'>
                       <input type="checkbox" onChange={handleChange} name="isHats" checked={parameters.isHats} /> 
                        <input type="checkbox" onChange={handleChange} name="isOutwear" checked={parameters.isOutwear} /> 
                        <input type="checkbox" onChange={handleChange} name="isShoes" checked={parameters.isShoes} /> 
                        <input type="checkbox" onChange={handleChange} name="isPants" checked={parameters.isPants} /> 
                        <input type="checkbox" onChange={handleChange} name="isAccesories" checked={parameters.isAccesories} /> 
                       </div>
                       <div className='form-checkboxes-labels'>
                        <label >Hats</label>
                        <label >Outwear</label>
                        <label >Shoes</label>
                        <label >Pants</label>
                        <label >Accesories</label>
                       </div>
                    </div>
                    <Button childrenText='SUBMIT' buttonType='default' />
                </form>
            </div>
            <div className="products-container">
                <div className="products-cards">
                   {filteredProducts.map((product)=>(
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FiltersItems;

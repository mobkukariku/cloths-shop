import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper , SwiperSlide } from "swiper/react";
import { useContext } from 'react';
import ProductCard from '../product-card/product-card.component';
import { ProductsContexts } from '../../contexts/products.context';
import './cards-slider.component.style.scss'
import 'swiper/css'

const CardsSlider = () =>{

    const{products} = useContext(ProductsContexts);

    return (
        <div className='card-swiper-container'>
            <p>MOST POPULAR</p>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={4}
            navigation
            loop
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            >
                {products.slice(0,10).map((product)=>(
                    <SwiperSlide><ProductCard key={product.id} product={product} /></SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CardsSlider;
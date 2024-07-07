import { Navigation, A11y } from 'swiper/modules';
import { Swiper , SwiperSlide } from "swiper/react";
import { useContext } from 'react';
import ProductCard from '../product-card/product-card.component';
import { ProductsContexts } from '../../contexts/products.context';
import './cards-slider.component.style.scss'
import 'swiper/swiper-bundle.css';

const CardsSlider = () => {
    const { products } = useContext(ProductsContexts);
  
    return (
      <div className='card-swiper-container'>
        <p>MOST POPULAR</p>
        <Swiper
          modules={[Navigation, A11y]}
          slidesPerView={4}
          spaceBetween={20}
          navigation
          loop
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {products.slice(0, 10).map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  
  export default CardsSlider;
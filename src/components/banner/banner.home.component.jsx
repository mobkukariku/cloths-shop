import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import BANNERS from '../../banner-data.json';
import './banner.home.component.style.scss'
import 'swiper/css/navigation';
import "swiper/css";
const HomeBanner = () =>{
    return(
        <>
      <Swiper navigation={true} modules={[Navigation]}  loop={true} className="mySwiper ">
        {BANNERS.map((item) =>(
            <SwiperSlide key={item.id} className='swiper-slide' >
                <img src={item.BannerSrc} alt="bannerSlide" />
            </SwiperSlide>
        ))}
      </Swiper>
    </>
    );
}

export default HomeBanner;
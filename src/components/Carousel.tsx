// src/Carousel.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css';
import '../assets/06.jpg';

import arrowLeft from './arrow-left.svg';
import arrowRight from './arrow-right.svg';

interface Props {
  slides: string[];
}

const Carousel: React.FC<Props> = ({ slides }) => {
  return (
    <Swiper
      modules={[EffectCoverflow, Navigation, Pagination]}
      navigation={{
        prevEl: '.button-prev',
        nextEl: '.button-next',
      }}
      pagination={{
        clickable: true,
      }}
      speed={1000}
      slidesPerView={'auto'}
      centeredSlides
      effect={'coverflow'}
      coverflowEffect={{
        rotate: 30,
        stretch: 0,
        depth: 15,
        modifier: 0.8,
        slideShadows: true,
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="slide-inner">
          <img className='cardss' src={slide} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
      <div className="button-prev">
        <img className='cardss' src={arrowLeft} alt="Previous" />
      </div>
      <div className="button-next">
        <img className='cardss' src={arrowRight} alt="Next" />
      </div>
    </Swiper>
  );
};

export default Carousel;

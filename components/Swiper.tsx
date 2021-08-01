import React, { useState } from 'react';
import SwiperCore, { Virtual } from 'swiper';
import { Swiper as SwiperLib, SwiperSlide } from 'swiper/react';

export default function Swiper() {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
      <SwiperLib
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => {}}
        autoplay
      >
        <SwiperSlide>
          <div className="my-swiper my-swiper-1">
            <div className="container flex">
              <div className="text">
                <h2>Digital Theme</h2>
                <h1>For Web & Mobile</h1>
                <p>We develop product and services for ecommerce, insurance and handful of other key industries</p>
              </div>

              <div className="p">
                <a className="btn" href="#">Start a project</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </SwiperLib>
  );
};
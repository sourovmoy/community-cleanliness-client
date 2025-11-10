import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Virtual,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/virtual";
// import "swiper/css/effect-coverflow";

import img1 from "../../assets/1681367949744.jpeg";
import img2 from "../../assets/36-ke-240602-cleanup-2.webp";
import img5 from "../../assets/IMG_1567_09989-e1663049404819.jpg";
import img6 from "../../assets/IMG_E6238-scaled.jpg";

const Banner = () => {
  return (
    <div>
      <div className="">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-2xl shadow-xl px-5"
        >
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <img className="h-[50vh] " src={img1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <img className="h-[50vh] " src={img2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <img className="h-[50vh] " src={img5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <img className="h-[50vh]" src={img6} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;

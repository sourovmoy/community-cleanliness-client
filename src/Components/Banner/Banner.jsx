import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Typewriter } from "react-simple-typewriter";

import img1 from "../../assets/1681367949744.jpeg";
import img2 from "../../assets/36-ke-240602-cleanup-2.webp";
import img5 from "../../assets/IMG_1567_09989-e1663049404819.jpg";
import img6 from "../../assets/IMG_E6238-scaled.jpg";
import { FaSearch } from "react-icons/fa";
import MotionHeading from "../Motion/MotionHeading";

const Banner = () => {
  return (
    <div className="">
      <div className="bg-linear-to-r from-sky-300 to-sky-200 rounded-2xl">
        <MotionHeading>
          Our <span className="heading-primary">Activity</span>
        </MotionHeading>
        <div className="flex justify-center items-center">
          <h1 className="mt-4 text-sm sm:text-xl font-semibold text-sky-800 text-center sm:flex items-center">
            <p className="text-sm sm:text-2xl font-bold">
              C<span className="heading-primary">C&I</span>RP :
            </p>

            <span className="">
              <Typewriter
                words={["Community Cleanliness Issue Reporting Portal"]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-2xl shadow-xl "
        >
          <SwiperSlide>
            <div className="flex justify-center items-center mt-8 mx-2">
              <img
                className="h-[50vh] sm:h-[70vh] w-[70vw] rounded-2xl"
                src={img1}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center mt-8 mx-2">
              <img
                className="h-[50vh] sm:h-[70vh] w-[70vw] rounded-2xl"
                src={img2}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center mt-8 mx-2">
              <img
                className="h-[50vh] sm:h-[70vh] w-[70vw] rounded-2xl"
                src={img5}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center mt-8 mx-2">
              <img
                className="h-[50vh] sm:h-[70vh] w-[70vw] rounded-2xl"
                src={img6}
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;

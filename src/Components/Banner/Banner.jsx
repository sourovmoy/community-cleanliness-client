import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import * as motion from "motion/react-client";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../assets/1681367949744.jpeg";
import img2 from "../../assets/36-ke-240602-cleanup-2.webp";
import img5 from "../../assets/IMG_1567_09989-e1663049404819.jpg";
import img6 from "../../assets/IMG_E6238-scaled.jpg";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="">
      <div className="bg-linear-to-r from-sky-300 to-sky-200">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold pt-5 mb-2 sm:mb-5"
        >
          Our <span className="heading-primary">Activity</span>
        </motion.h2>

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
        <div className="flex flex-col justify-center items-center mt-10">
          {" "}
          <div className="items-center">
            <input
              type="text"
              placeholder="search For Products, Categoriees..."
              className="input rounded-l-full border-r-none w-auto sm:w-[40vw] mb-3 sm:mb-3"
            />
            <button className="btn btn-md absolute b-5 rounded-r-full border-r-none text-white bg-linear-to-l from-sky-700 to-sky-400">
              <FaSearch />
            </button>
          </div>
          <div className="space-x-2">
            <Link
              to={"/add-issues"}
              className="btn text-white btn-primary border-none hover:scale-102 hover:shadow-lg duration-300"
            >
              Create Issues
            </Link>
            <Link
              to={"/my-issues"}
              className="btn bg-white dark:bg-gray-200 border-sky-400 outline-1 outline-sky-900 text-sky-900 my-3 hover:scale-102 hover:shadow-lg duration-300"
            >
              Post an Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

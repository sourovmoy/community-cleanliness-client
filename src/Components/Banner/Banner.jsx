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
            <section className="flex flex-col md:flex-row items-center justify-between w-full min-h-screen">
              {/* Left Section */}
              <div className="flex flex-col justify-center px-10 py-16 md:w-1/2 bg-gradient-to-r from-teal-600 via-blue-500 to-indigo-500 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Together for a Cleaner Tomorrow 🌍
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  Join hands to make our planet greener and cleaner. Every small
                  action counts — let’s build a sustainable future together.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-100 transition">
                  Join the Movement
                </button>
              </div>

              {/* Right Section (Image) */}
              <div className="md:w-1/2 w-full h-[400px] ">
                <img
                  src={img1} // 🖼️ Replace with your actual image path (e.g. /assets/cleanup.jpg)
                  alt="Clean-up team"
                  className="w-full  object-cover h-[64vh]"
                />
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="flex flex-col md:flex-row items-center justify-between w-full min-h-screen">
              {/* Left Section */}
              <div className="flex flex-col justify-center px-10 py-16 md:w-1/2 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
                  Building a Cleaner Community 🧤
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90 max-w-md">
                  Change begins with us — one cleanup at a time. Together, we
                  can transform our surroundings and inspire others to care for
                  our planet.
                </p>
                <button className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-orange-100 transition">
                  Get Involved
                </button>
              </div>

              {/* Right Section (Image) */}
              <div className="md:w-1/2 w-full h-[400px] md:h-screen">
                <img
                  src={img2} // 🖼️ Replace with your actual image path (e.g., public/images/community-cleanup.jpg)
                  alt="Community cleanup volunteers"
                  className="w-full h-full object-cover"
                />
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen overflow-hidden">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={img5} // 🖼️ Replace with your image path (e.g. public/images/green-action.jpg)
                  alt="Community clean-up volunteers"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-emerald-800/70 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="relative z-10 text-white px-10 py-20 md:py-0 md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  Take Action for a <br />
                  <span className="bg-gradient-to-r from-lime-300 to-teal-200 bg-clip-text text-transparent">
                    Greener Planet
                  </span>
                </h1>
                <p className="text-lg md:text-xl max-w-md text-gray-100/90">
                  Small efforts make big differences. Join our cleanup
                  initiative to restore nature and keep our communities clean
                  and vibrant.
                </p>
                <button className="bg-lime-400 text-green-900 px-7 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200">
                  Volunteer Now
                </button>
              </div>

              {/* Decorative Shape on Right Side */}
              <div className="hidden md:block md:w-1/2 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-transparent to-white/10 backdrop-blur-sm clip-diagonal"></div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="flex flex-col md:flex-row items-center justify-between w-full min-h-screen">
              {/* Left Section */}
              <div className="flex flex-col justify-center px-10 py-16 md:w-1/2 bg-gradient-to-r from-teal-600 via-blue-500 to-indigo-500 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Together for a Cleaner Tomorrow 🌍
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  Join hands to make our planet greener and cleaner. Every small
                  action counts — let’s build a sustainable future together.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-100 transition">
                  Join the Movement
                </button>
              </div>

              {/* Right Section (Image) */}
              <div className="md:w-1/2 w-full h-[400px] ">
                <img
                  src={img6} // 🖼️ Replace with your actual image path (e.g. /assets/cleanup.jpg)
                  alt="Clean-up team"
                  className="w-full h-[64vh] object-cover"
                />
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;

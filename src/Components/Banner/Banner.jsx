import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import success from "../../assets/congratulation.json";

import img1 from "../../assets/1681367949744.jpeg";
import img2 from "../../assets/36-ke-240602-cleanup-2.webp";
import img5 from "../../assets/IMG_1567_09989-e1663049404819.jpg";
import img6 from "../../assets/IMG_E6238-scaled.jpg";
import MotionHeading from "../Motion/MotionHeading";
import Lottie from "lottie-react";
import { toast } from "react-toastify";

const Banner = () => {
  const [successMsg, setSuccessMsg] = useState(false);
  const heroSlides = [
    {
      id: 1,
      image: img1,
      overlay: "from-green-900/80 via-emerald-800/70 to-transparent",
      title: "Take Action for a",
      highlight: "Greener Planet",
      description:
        "Small efforts make big differences. Join our cleanup initiative to restore nature and keep communities clean.",
      buttonText: "Volunteer Now",
    },
    {
      id: 2,
      image: img2,
      overlay: "from-sky-900/80 via-sky-800/70 to-transparent",
      title: "Report Issues for a",
      highlight: "Cleaner City",
      description:
        "Report garbage, road damage, and public issues easily and help authorities take action faster.",
      buttonText: "Report Issue",
    },
    {
      id: 3,
      image: img5,
      overlay: "from-red-900/80 via-red-800/70 to-transparent",
      title: "Support Community",
      highlight: "Clean-Up Drives",
      description:
        "Contribute small amounts to make a big impact in resolving local environmental problems.",
      buttonText: "Contribute Now",
    },
    {
      id: 4,
      image: img6,
      overlay: "from-green-900/80 via-emerald-800/70 to-transparent",
      title: "Build a",
      highlight: "Sustainable Future",
      description:
        "Together we can protect public spaces and ensure a healthier environment for future generations.",
      buttonText: "Join Community",
    },
  ];
  const handelClick = () => {
    setSuccessMsg(true);
    toast.success("Welcome! Thank you for joining us.");
    setTimeout(() => {
      setSuccessMsg(false);
    }, 3000);
  };

  return (
    <div className="">
      {successMsg && (
        <div className="absolute inset-0 flex items-center justify-center rounded-xl z-50">
          <Lottie
            animationData={success}
            loop={successMsg}
            autoplay
            className="w-64"
          />
        </div>
      )}
      <div className="rounded-2xl">
        <MotionHeading>
          Our <span className="heading-primary">Activity</span>
        </MotionHeading>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[70vh] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.highlight}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`}
                  ></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-white px-10 py-20 md:py-0 md:w-1/2 space-y-6">
                  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                    {slide.title} <br />
                    <span className="bg-gradient-to-r from-lime-300 to-teal-200 bg-clip-text text-transparent">
                      {slide.highlight}
                    </span>
                  </h1>

                  <p className="text-lg md:text-xl max-w-md text-gray-100/90">
                    {slide.description}
                  </p>

                  <button
                    onClick={() => handelClick()}
                    className="bg-lime-400 text-green-900 px-7 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200"
                  >
                    {slide.buttonText}
                  </button>
                </div>

                {/* Decorative Right Side */}
                <div className="hidden md:block md:w-1/2 relative">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-transparent to-white/10 backdrop-blur-sm clip-diagonal"></div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;

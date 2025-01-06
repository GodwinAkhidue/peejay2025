"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Timer from "./timer";

export default function HeroSection() {
  return (
    <div>
      <HeroSlider />
    </div>
  );
}

const HeroSlider = () => {
  const slides = [
    "/images/heroimg1.jpg",
    "/images/heroimg2.jpg",
    "/images/heroimg3.jpg",
  ];

  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        speed={2000}
        autoplay={{ delay: 8000 }}
        allowTouchMove={false}
      >
        {slides.map((slide: any, index: any) => (
          <SwiperSlide key={index}>
            <div
              className="slide-inner"
              style={{
                backgroundImage: `url(${slide})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
              }}
            >
              <div className="w-full h-full bg-black bg-opacity-10 text-white flex flex-col items-center justify-center">
                <div className="greatvibes text-[40px]">Precious & Jeffery</div>
                <div className="futurapt font-medium text-[18px] mt-[20px]">
                  We Are Getting Married 13 & 15 Feb, 2025
                </div>
                <div className="mt-[20px]">
                  <Timer/>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
        <div className="next-prev-btn">
          <div className="custom-next backdrop-blur-lg transition-all duration-300">
            <AiFillCaretRight />
          </div>
          <div className="custom-prev backdrop-blur-lg transition-all duration-300">
            <AiFillCaretLeft />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

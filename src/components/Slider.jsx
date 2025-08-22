"use client";
import React from "react";
import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.webp";
import slider3 from "@/assets/slider-3.webp";
import slider4 from "@/assets/slider-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Slider = () => {
  const sliderData = [
    {
      heading: "Innovate Your World",
      description:
        "Discover the latest tech gadgets designed to simplify your life, boost efficiency, and keep you ahead in the fast-paced digital era.",
      buttonText: "Shop Products",
      buttonLink: "/products",
      image: slider1,
    },
    {
      heading: "Next-Level Entertainment",
      description:
        "Dive into immersive audio, cutting-edge VR, and gaming accessories crafted to deliver unforgettable entertainment experiences every time.",
      buttonText: "Explore Products",
      buttonLink: "/products",
      image: slider2,
    },
    {
      heading: "Smart & Connected",
      description:
        "Transform your home with smart devices and accessories that seamlessly connect, bringing comfort, convenience, and security together.",
      buttonText: "Browse Now",
      buttonLink: "/products",
      image: slider3,
    },
    {
      heading: "Power Up Your Productivity",
      description:
        "Unlock your potential with powerful gadgets and accessories that help you work smarter, faster, and more effectively than ever before.",
      buttonText: "Check Products",
      buttonLink: "/products",
      image: slider4,
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      loop={sliderData.length > 3}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="mySwiper"
      effect="fade"
    >
      {sliderData.map((slider, index) => (
        <SwiperSlide key={index}>
          <div className="relative">
            {/* Background Image */}
            <Image
              src={slider.image}
              alt={slider.heading}
              className="w-full h-[600px] object-cover rounded-2xl"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-6 z-10">
              <div className="text-white space-y-4 max-w-2xl">
                <h2 className="text-2xl md:text-5xl font-bold leading-tight">
                  {slider.heading}
                </h2>
                <p className="text-sm md:text-lg opacity-90">
                  {slider.description}
                </p>
                <Link href={slider.buttonLink}>
                  <Button className="mt-4 cursor-pointer bg-amber-900 hover:bg-amber-800">{slider.buttonText}</Button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
